import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import AddCategory from './AddCategory'

class Categories extends React.Component {
    constructor() {
      super();
      this.state = {
        categories: []
      };
    }

    componentDidMount() {
      this.getCategories();
    }

    getCategories() {
        let component = this;
        let url = "https://arcane-fortress-98840.herokuapp.com/categories.json";
        jQuery.getJSON(url, function(data) {
            component.setState({
                categories: data.categories
            });
        });
    }

    onNewCategory(categoryName){
        var newCategory = {
            name: categoryName
        };

        this.setState({
            category: newCategory
        });

        this.saveCategory(newCategory);
    }

    saveCategory(newCategory){
      jQuery.ajax({
        type: "POST",
        url: "https://arcane-fortress-98840.herokuapp.com/categories.json",
        data: JSON.stringify({
            category: newCategory
        }),
        contentType: "application/json",
        dataType: "json"
      });
    }

    onSubmit(event){
      event.preventDefault();
      var categoryName = this.refs.categoryInput.value;
      this.props.onSubmit(categoryName);
    }

    render() {
        return (
            <div className="categories">
                <h1>Categories!</h1>
                <ul>
                    {this.state.categories.map(function(category) {
                        return(
                            <li key={category.id}>
                                <Link to={`/categories/${category.id}`}>{category.name}</Link>
                            </li>
                        );
                    })}
                </ul>
                <hr />
                <div>
                    <p>Add new Category:</p>
                    <form onSubmit={this.onNewCategory.bind(this)}>
                        <input type="text" ref="categoryInput" placeholder="Category name..." />
                        <br />
                        <button>Add Category</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Categories;
