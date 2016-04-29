import React from 'react';

class AddCategory extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var categoryName = this.refs.categoryInput.value;
    this.props.onSubmit(categoryName);
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" ref="categoryInput" placeholder="Category name..." />
        <br />
        <button>Add Category</button>
      </form>
    );
  }
}

export default AddCategory;
