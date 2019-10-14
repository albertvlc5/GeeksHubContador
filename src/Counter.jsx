import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.inicial,
            step: this.props.step,
            persona: '  adulto',
            personas: '  adultos',
            quien: '',
            max: 10,
            min: -10
        }
    }

    incrementar = (step = 1) => {
        if (this.state.counter + this.state.step > this.state.max) {
            // this.setState({
            //     counter: this.state.max
            // })
        } else {
            this.setState({
                counter: this.state.counter += step
            })
        }

    }
    decrementar = (step = 1) => {
        if (this.state.counter - this.state.step< this.state.min) {
            // this.setState({
            //     counter: this.state.min
            // })
        } else {
            this.setState({
                counter: this.state.counter -= step
            })
        }
    }
    handleChange = event => {
        this.setState({ step: parseInt(event.target.value) })
    }


    render() {
        if (this.state.counter === 1 || this.state.counter === -1) {
            this.state.quien = this.state.persona
        } else {
            this.state.quien = this.state.personas
        }
        return (<div>
            <input type="number" onChange={this.handleChange} />
            <br />
            <button onClick={() => this.decrementar(this.state.step)}>-</button>
            {(this.state.counter) + (this.state.quien)}
            <button onClick={() => this.incrementar(this.state.step)}>+</button>
        </div>)
    }
}

export default Counter;