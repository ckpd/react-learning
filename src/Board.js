import {Component} from 'react'
import './index.css';




const Square = (props) => {
   return (
      <button className="square" onClick={ props.onClick }>
        {props.value}
      </button>
    )

}


class Board extends Component {
  constructor(props){
    super(props);
      this.state = {
        squares: Array(9).fill(null),
        isNextClickX: true
      }
  }

  handleClick (i) {
      const copy_squares = this.state.squares.slice(); // this creates a new copy of the squares

      let next = this.state.isNextClickX;
      
      if(next === true){
        copy_squares[i] = 'X'
        next = false;
      } else{
        copy_squares[i] = 'O'
        next = true;
      }

  
      this.setState({
        squares: copy_squares,
        isNextClickX : next
    })
 
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }


   render(){
    console.log(this.state.squares);

    let status;

    const winner = calculateWinner(this.state.squares);
    
  
    if (winner) {
      status = 'Winner: ' + winner;    
    } else {      
      status = 'Next player: ' + 
      (this.state.isNextClickX ? 'X' : 'O');   
    }
    
    return (
        <div>
          <h1>{status} </h1>
          <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}

              <div className="board-row">
              </div>
              <Square value={this.state.squares[3]} 
               onClick = {()=>this.handleClick(3)} />

              <Square value={this.state.squares[4]} 
               onClick = {()=>this.handleClick(4)} />

              <Square value={this.state.squares[5]} 
                onClick = {()=>this.handleClick(5)} />


              <div className="board-row">
              </div>
              <Square value={this.state.squares[6]} 
               onClick = {()=>this.handleClick(6)} />

              <Square value={this.state.squares[7]} 
               onClick = {()=>this.handleClick(7)} />

              <Square value={this.state.squares[8]} 
                onClick = {()=>this.handleClick(8)} />
              </div>

        </div>
     );
  }
 
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
     
    const [a, b, c] = lines[i]; 

    console.log(` squares[a]  ${squares[a]}  \t  squares[b] ${squares[b]}  \t  squares[c] ${squares[c]} `);

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { 
      console.log(`what the fuck ${squares[a]}`);
      return squares[a];
    }
  }
  return null;
}



export default Board;
