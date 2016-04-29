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

        var newCategories = this.state.categories.concat(newCategory);
        this.setState({
            categories: newCategories
        });

        this.saveCategory(newCategories);
    }

    saveCategory(newCategories){
      jQuery.ajax({
        type: "POST",
        url: "https://arcane-fortress-98840.herokuapp.com/categories.json",
        data: JSON.stringify({
            categories: newCategories
        }),
        contentType: "application/json",
        dataType: "json"
      });
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
                    <AddCategory onSubmit={this.onNewCategory.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Categories;
