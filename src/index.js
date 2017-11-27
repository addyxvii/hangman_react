import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Alphabet extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    value: 'X'
  };
}
  render() {
    return (
      <button className="alphabet" onClick={() => this.setState({value: null})}>
      {this.state.value}
      </button>
    );
  }
}

class Grid extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      alphabet: Array(26).fill(null),
    };
  }
  renderAlphabet(i) {
    return <Alphabet value={this.state.alphabet[i]}
            onClick={() => this.handleClick(i)}
    />;
  }
    render () {
    return (
      <div>
        <div className="alpha-row">
        {this.renderAlphabet('a')}
        {this.renderAlphabet('b')}
        {this.renderAlphabet('c')}
        {this.renderAlphabet('d')}
        {this.renderAlphabet('e')}
        {this.renderAlphabet('f')}
        {this.renderAlphabet('g')}
        {this.renderAlphabet('h')}
        {this.renderAlphabet('i')}
        {this.renderAlphabet('j')}
        {this.renderAlphabet('k')}
        {this.renderAlphabet('l')}
        {this.renderAlphabet('m')}
        </div>
        <div className="alpha-row">
        {this.renderAlphabet('n')}
        {this.renderAlphabet('o')}
        {this.renderAlphabet('p')}
        {this.renderAlphabet('q')}
        {this.renderAlphabet('r')}
        {this.renderAlphabet('s')}
        {this.renderAlphabet('t')}
        {this.renderAlphabet('u')}
        {this.renderAlphabet('v')}
        {this.renderAlphabet('w')}
        {this.renderAlphabet('x')}
        {this.renderAlphabet('y')}
        {this.renderAlphabet('z')}
       </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Grid />
        </div>
        <div className="game-info">
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
