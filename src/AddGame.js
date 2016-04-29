import React from 'react';

class AddGame extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var gameTitle = this.refs.gameTitleInput.value;
    var gameCover = this.refs.gameCoverInput.value;
    this.props.onSubmit(gameTitle, gameCover);
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
          <input ref="gameTitleInput" placeholder="Game title..." />
          <br />
          <input ref="gameCoverInput" placeholder="Game cover..." />
          <br />
          <button>Add Game</button>
      </form>
    );
  }
}

export default AddGame;
