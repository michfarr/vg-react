import React from 'react';

class Category extends React.Component {
  render() {
      return (
        <div className="category">
          <h1>Category!</h1>
          <p>ID: {this.props.params.categoryId}</p>
          {this.props.children}
        </div>
      );
  }
}

export default Category;
