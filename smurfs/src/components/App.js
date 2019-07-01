import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import Smurfs from './Smurfs';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addSmurf(this.state)
    this.setState({
      name: '',
      age: '',
      height: '',
    })
  }

  componentDidMount() {
    this.props.getSmurfs();
  } 

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <form onSubmit={this.onSubmit}>
          <input 
            type='text'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.changeHandler}
          ></input>
          <br/>
          <input
            type='text'
            name='height'
            placeholder='Height'
            value={this.state.height}
            onChange={this.changeHandler}
          ></input>
          <br/>
          <input
            type='text'
            name='age'
            placeholder='Age'
            value={this.state.age}
            onChange={this.changeHandler}
          ></input>
          <br/>
          <button>Add Smurf!</button>
        </form>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
