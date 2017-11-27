import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Alphabet extends React.Component{
  render() {
    return (
      <button className="alphabet">
      {this.props.value}
      </button>
    );
  }
}

class Grid extends React.Component{
  renderAlphabet(i) {
    return <Alphabet value={i} />;
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

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
     return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare('a')}
          {this.renderSquare('b')}
          {this.renderSquare('c')}
        </div>
        <div className="board-row">
          {this.renderSquare('d')}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
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
          <div>{/* status */}</div>
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
