import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import AddGame from './AddGame';

class Games extends React.Component {
    constructor() {
        super();
        this.state = {
            games: []
        };
    }

    componentDidMount() {
        this.getGames();
    }

    getGames() {
        let component = this;
        let url = "https://arcane-fortress-98840.herokuapp.com/categories/"+this.props.params.categoryId+"/games.json";
        jQuery.getJSON(url, function(data) {
            component.setState({
                games: data.games
            });
        });
    }

    onNewGame(gameTitle, coverImage){
        var categoryId = this.props.params.categoryId
        var newGame = {
            title: gameTitle,
            category_id: categoryId
        };

        var newGames = this.state.games.concat(newGame);
        this.setState({
            games: newGames
        });

        this.saveGame(newGames);
    }

    saveGame(newGames){
      jQuery.ajax({
        type: "POST",
        url: "https://arcane-fortress-98840.herokuapp.com/categories/"+this.props.params.categoryId+"/games.json",
        data: JSON.stringify({
            games: newGames
        }),
        contentType: "application/json",
        dataType: "json"
      });
    }

    render() {
        return (
            <div className="games">
                <h1>Games</h1>
                <ul>
                    {this.state.games.map(function(game) {
                        return(
                            <li key={game.id}>
                                <Link to={`/categories/${game.category_id}/games/${game.id}`}>{game.title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <hr />
                <div>
                    <p>Add new Game</p>
                    <AddGame onSubmit={this.onNewGame.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Games;
