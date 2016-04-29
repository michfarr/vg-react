import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import AddReview from './AddReview';

class Reviews extends React.Component {
    constructor() {
      super();
      this.state = {
        reviews: []
      };
    }

    componentDidMount() {
      this.getReviews();
    }

    getReviews() {
      let component = this;
      let url = "https://arcane-fortress-98840.herokuapp.com/categories/"+this.props.params.categoryId+"/games/"+this.props.params.gameId+"/reviews.json";
      jQuery.getJSON(url, function(data) {
        component.setState({
          reviews: data.reviews
        });
      });
    }

    onNewReview(reviewerName, rating, content, game){
        var reviewId = this.props.params.reviewId
        var newReview = {
            name: reviewName,
            rating: rating,
            content: content,
            game_id: gameId
        };

        var newReviews = this.state.reviews.concat(newReview);
        this.setState({
            reviews: newReviews
        });

        this.saveReview(newReviews);
    }

    saveReview(newReviews){
      jQuery.ajax({
        type: "POST",
        url: "https://arcane-fortress-98840.herokuapp.com/categories/"+this.props.params.categoryId+"/games/"+this.props.params.gameId+"/reviews.json",
        data: JSON.stringify({
            reviews: newReviews
        }),
        contentType: "application/json",
        dataType: "json"
      });
    }

    render() {
        return (
            <div className="reviews">
                <h1>Reviews</h1>
                <ul>
                    {this.state.reviews.map(function(review) {
                        return(
                            <li key={review.id}>
                            </li>
                        );
                    })}
                </ul>
                <hr />
                // <div>
                //     <p>Add new Review</p>
                //     <AddReview onSubmit={this.onNewReview.bind(this)} />
                // </div>
            </div>
        );
    }
    }

    export default Reviews;
