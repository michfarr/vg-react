import React from 'react';

class Category extends React.Component {
  render() {
      return (
        <div className="category">
          <h1>Category!</h1>

          {this.props.children}
        </div>
      );
  }
}

export default Category;
