import React, { Component } from 'react';

import './CoinToss.css';
import Coin from './Coin';
import heads from '../img/heads.png';
import tails from '../img/tails.png';

export class CoinToss extends Component {
    static defaultProps = {
        coinSide: [heads, tails],
    };

    constructor(props) {
        super(props);

        this.state = {
            currentSide: heads,
            totalFlips: 0,
            headsCount: 0,
            tailsCount: 0,
            flip: false,
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    // Handle Click for Flip Coin Button
    clickHandler() {
        // Show Flip Animation
        this.setState({ flip: true }, () => {
            setTimeout(() => {
                this.setState({ flip: false });
                // Generate random side
                const randomSide = this.props.coinSide[
                    Math.floor(Math.random() * this.props.coinSide.length)
                ];
                // Update total flips & heads/tails count
                this.setState((state) => {
                    if (randomSide === heads) {
                        return {
                            totalFlips: state.totalFlips + 1,
                            headsCount: state.headsCount + 1,
                        };
                    } else if (randomSide === tails) {
                        return {
                            totalFlips: state.totalFlips + 1,
                            tailsCount: state.tailsCount + 1,
                        };
                    }
                });
                // Update coin state state
                this.setState({ currentSide: randomSide });
            }, 1500);
        });
    }

    render() {
        return (
            <div className="CoinToss">
                <Coin
                    flip={this.state.flip ? 'flip' : ''}
                    coin={this.state.currentSide}
                />
                <div>
                    <h2 style={{ color: 'green' }}>
                        Current Side:{' '}
                        <span style={{ color: 'Blue' }}>
                            {this.state.currentSide === heads
                                ? 'Heads'
                                : 'Tails'}
                        </span>
                    </h2>
                    <h4>Total Flips: {this.state.totalFlips}</h4>
                    <h4>Heads: {this.state.headsCount}</h4>
                    <h4>Tails: {this.state.tailsCount}</h4>
                </div>
                <button disabled={this.state.flip} onClick={this.clickHandler}>
                    Flip Coin
                </button>
            </div>
        );
    }
}

export default CoinToss;
