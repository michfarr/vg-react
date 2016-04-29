import React from 'react';

class AddGame extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var gameName = this.refs.gameInput.value;
    this.props.onSubmit(gameName);
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
