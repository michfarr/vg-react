import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      game: []
    };
  }

  componentDidMount() {
    this.getGame();
  }

  getGame() {
    let component = this;
    let url = "https://arcane-fortress-98840.herokuapp.com/categories/"+this.props.params.categoryId+"/games/"+this.props.params.gameId+".json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        game: data.game
      })
    })
  }

// <img className="image" src={"images/" + this.props.coverImage} />

  render() {
      return (
        <div className="game">
          <p>ID: {this.props.params.gameId}</p>
          <h1>Game!</h1>
          <p>{this.state.game.title}</p>
          <img className="image" src={this.state.game.cover_image} />
        </div>
      );
  }
}

export default Game;
