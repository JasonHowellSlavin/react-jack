import React, { Component } from 'react';
import './BlackJack.scss';
import { connect } from 'react-redux';

class BlackJack extends Component{
    constructor(props) {
        super(props);
        this.state = {
            gameLog: ['Please press start to start the game'],
            fullLog: [],
            dealerHand: [],
            playerHand: [],
            deck: []
        };
        this.start = this.start.bind(this);
        this.createLog = this.createLog.bind(this);
        this.hit = this.hit.bind(this);
        this.playerHit = this.playerHit.bind(this);
    }

    createDeck() {
        let deck = ['A'];

        for(let i = 2; i < 13; i++) {
            if (i < 10) {
                deck.push(i);
            } else {
                deck.push(10);
            }
        }

        console.log(deck);
        return deck;
    }

    sumHand (hand) {
        let newSum = 0;
        let deckError = false;

        let handSum = hand.reduce((accum, item) => {
            if (item === 'A' && (accum + 11) < 21) {
                accum += 11;
            } else if (item === 'A' && (accum + 11) >= 21) {
                accum += 1;
            } else if (item >= 2 && item <= 10){
                accum += item;
            } else {
                deckError = `An incorrect value has been passed to sumHand, ${item}`;
            }

            return accum;
        }, 0); 

        // check to see if any card values were incorrect, if so, do not sum the hand
        if (typeof deckError === 'string') {
            console.log(deckError);
            return;
        }

        // recount the hand, to see if it had aces in it to begin with
        if (handSum > 21) {
            newSum = hand.reduce((accum, item, i) => {
                if (item === 'A' && accum > 21) {
                    accum -= 10;
                }

                return accum;
            }, handSum);
        }

        if (newSum > 0) {
            return newSum;
        } else {
            return handSum;
        }
    }

    hit (targetHand, name) {
        let hand = this.state[targetHand].slice();
        console.log('hand', hand);

        let card = this.state.deck[Math.floor(Math.random() * this.state.deck.length)];
        console.log('card', card);

        hand.push(card);

        let handSum = this.sumHand(hand);

        let string = `${name} drew a ${card}. ${name}'s hand sum is ${handSum}.`;
   
        let currentGameLog = this.createLog(true, string);

        return {hand: hand, currentGameLog: currentGameLog};
    }

    playerHit () {
        let playerHits = this.hit('playerHand', 'player')

        this.setState({
            playerHand: playerHits.hand,
            gameLog: playerHits.currentGameLog
        })
    }

    stay() {

    }

    deal() {
        let deck = this.createDeck();

        let hand = [];

        for (let i = 0; i < 2; i++) {
            hand.push(deck[Math.floor(Math.random() * deck.length)]);
        }

        return hand; 
    }

    createLog(full, ...args) {
        let currentGameLog = full ? this.state.gameLog.slice() : [];

        args.forEach((arg) => {
            currentGameLog.push(arg);
        })

        return currentGameLog;
}

    start() {
        let playerHand = this.deal();
        let dealerHand = this.deal();
        let dealerString = `The dealer has a ${dealerHand[0]} showing.`;
        let playerString = `You have a ${playerHand[0]}, and ${playerHand[1]}. Hit or Stay?`;

        let gameLog = this.createLog(true, dealerString, playerString);
        let currentGameLog = this.createLog(false, dealerString, playerString);

        this.setState({
            dealerHand: dealerHand,
            playerHand: playerHand,
            fullLog: gameLog,
            gameLog: currentGameLog
        })
    }

    componentDidMount() {
        let deck = this.createDeck();

        this.setState({
            deck: deck
        });
    }

    render(){
        return(
            <section className={"table"}>
                <section className={"display"}>
                    {this.state.gameLog.map((log) => <p>{log}</p>)}
                </section>
                <button onClick={() => {this.start()}}>Start</button>
                <button onClick={() => {this.playerHit()}}>Hit</button>
                <button>Stay</button>
            </section>
        )
    }
}

export default BlackJack;