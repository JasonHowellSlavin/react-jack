import React, { Component } from 'react';
import { connect } from 'react-redux';

const MrShow = (props) => {
    return (
        <div>
            <h2 style={{color: 'green'}}>{props.count}</h2>
            <h2 style={{color: 'green'}}>{props.words}</h2>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      count: state.counterReducer.count,
      words: state.wordPickerReducer.word
    };
  }

export default connect(mapStateToProps)(MrShow);