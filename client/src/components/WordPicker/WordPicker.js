import React, { Component } from 'react';
import './WordPicker.scss';
import { connect } from 'react-redux';
import { update, back, forward } from '../../actions/WordPickerActions'; 

class WordPicker extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.back = this.back.bind(this);
        this.forward = this.forward.bind(this);
    }

    update(word) {
        this.props.update(word);
    }
    
    back() {
        this.props.back();
    }

    forward() {
        this.props.forward();
    }

    render() {
        return(
            <section className={"word-picker"}>
                <select onChange={(e) => this.update(e.currentTarget.value)}>
                    <option>hamburger</option>
                    <option>hot dog</option>
                    <option>french fries</option>
                    <option>soda</option>
                    <option>milkshake</option>
                </select>
                <section>
                    <h3>See what words have been chosen!</h3>
                    {/* <h3>Total Words: {this.props.pickedWords.length}</h3> */}
                    <h3>Word: {this.props.word}</h3>
                    <h3>Current Word Position: {this.props.currentPosition}</h3>
                    <button onClick={this.back}>Back</button>
                    <button onClick={this.forward}>Forward</button>
    
                </section>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        word: state.wordPickerReducer.word,
        pickedWords: state.wordPickerReducer.pickedWords,
        currentPosition: state.wordPickerReducer.currentPosition
    };
  }

const mapDispatchToProps = {
    update,
    back,
    forward
};

export default connect(mapStateToProps, mapDispatchToProps)(WordPicker);