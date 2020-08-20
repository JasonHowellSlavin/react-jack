import React, { Component } from 'react';
import './Counter.scss';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions/CounterActions'; 

class Counter extends Component{
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment () {
        this.props.increment();
    }
    
    decrement () {
        this.props.decrement();
    }

    reset () {
        this.props.reset();
    }

    render(){
        return(
            <section className={"counter"}>
                <h2>Counter</h2>
                <div>
                    <div className={"plus"} onClick={this.increment}>+</div>
                    <h3>{this.props.count}</h3>
                    <div className={"minus"} onClick={this.decrement}>-</div>
                </div>
                <button onClick={this.reset}>Reset</button>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
      count: state.counterReducer.count
    };
  }

const mapDispatchToProps = {
    increment,
    decrement,
    reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);