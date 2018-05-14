import React, { Component } from 'react';
import cards from "../../cards.json";
import './Game.css';
import Card from '../Card';

class Game extends Component {
    state = {
        Trumps: cards,
        score: 0,
        randomNumber: 0
    }

    componentDidMount() {
        let random = Math.floor(Math.random() * 12) + 1;
        this.setState({
            randomNumber: random
        });
    }

    cardClickedOn = (id) => {
        if (id === this.state.randomNumber) {
            this.setState({
                score: this.state.score + 1
            });
        } else {
            this.setState({
                tally: this.state.tally
            });
        }
    };

    render() {
        return (
            <div className="container">
                <p>Random Number: {this.state.randomNumber}</p>
                <p>Score: {this.state.score}</p>
                <p>Tally: {this.state.tally}</p>
                <div class="row">
                {this.state.Trumps.map(trump => (
                    <Card
                        key={trump.id}
                        id={trump.id}
                        name={trump.name}
                        image={trump.image}
                        cardClickedOn={this.cardClickedOn} />

                ))}
                </div>
            </div>
        );
    }
}

export default Game;
