

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {Container,makeStyles} from '@material-ui/core';








function App (){

  const useStyles = makeStyles (() =>({
    root: {
     
      color: '424242',
      background: '26a69a',
      border: '4px solid #3F51B5',
      float: 'left',
      
      fontsize: '96px',
      fontweight: 'bold',
      lineheight: '136px',
      height: '136px',
      marginright: '-1px',
      margintop:'-1px',
      padding: 0,
      
      width: '136px',

    },
    reset :{

      webkittransitionduration:' 0.4s', 
      transitionduration: '0.4s',
      backgroundcolor: 'black',
      color: '212121',
      border: 'none',
      fontsize: '24px',
      lineheight: '48px',
      height: '48px',
      width: '40%',
      textalign: 'center',
      borderradius: '4px',
  

   


    },



  }));


function Square({ value, onClick }) {
  const classes = useStyles();

  return (
    <button   className={classes.root} onClick={onClick}>
      {value}
    </button>
  );
}

ReactDOM.render(<Square />, document.getElementById("root"));


function Restart({ onClick }) {
  const classes = useStyles();

  return (
    <button  className={classes.reset} onClick={onClick}>
      Play again
    </button>
  );
}





function Game() {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ isXNext, setIsXNext ] = useState(true);
  
  const winner = calculateWinner(squares);

  function getStatus() {
    
    if (winner) {
      

      return "Winner: " + winner;
    } else if (isBoardFull(squares)) {
      return "Draw!";
    } else {
      return "Next player: " + (isXNext ? "X" : "O");
    }
  }






  
  return (
    <React.Fragment> 
    <Container maxWidth="sm" className="container">
      <Container className="game">
        <Container className="game-board">
          <Container className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </Container>
          <Container className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </Container>
          <Container className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </Container>
        </Container>
        <Container className="game-info">{getStatus()}</Container>
        <Container className="restart-button">{renderRestartButton()}</Container>
      </Container>
    </Container>
  </React.Fragment>
  );
  

  function renderRestartButton() {
    return (
      <Restart
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }}
      />
    );
  }












  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = (isXNext ? "X" : "O");
          setSquares(nextSquares);

          setIsXNext(!isXNext); 
        }}
      />
    );
  }
}
ReactDOM.render(<Game />, document.getElementById("root"));




function calculateWinner(squares) {
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
 
  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}


}
export default App;