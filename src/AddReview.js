import React from 'react';

class AddReview extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var reviewName = this.refs.reviewInput.value;
    this.props.onSubmit(reviewName);
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
          <input ref="reviewerNameInput" placeholder="Your name..." />
          <br />
          <input ref="reviewRatingInput" placeholder="Game rating..." />
          <br />
          <input ref="reviewContentInput" placeholder="Game review..." />
          <br />
          <button>Add Game</button>
      </form>
    );
  }
}

export default AddReview;
