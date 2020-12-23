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


   render(){
    const status = `Next Player - ${this.state.isNextClickX   ? 'X': 'O'}`; //string  interpolation

    return (
        <div>
          <h1>{status} </h1>
          <div className="board-row">
              <Square value={this.state.squares[1]}
                onClick = {()=>this.handleClick(1)} />

              <Square value={this.state.squares[2]}
                onClick = {()=>this.handleClick(2)} />

              <Square value={this.state.squares[3]}
                onClick = {()=>this.handleClick(3)} />

              <div className="board-row">
              </div>
              <Square value={this.state.squares[4]} 
               onClick = {()=>this.handleClick(4)} />

              <Square value={this.state.squares[5]} 
               onClick = {()=>this.handleClick(5)} />

              <Square value={this.state.squares[6]} 
                onClick = {()=>this.handleClick(6)} />


              <div className="board-row">
              </div>
              <Square value={this.state.squares[7]} 
               onClick = {()=>this.handleClick(7)} />

              <Square value={this.state.squares[8]} 
               onClick = {()=>this.handleClick(8)} />

              <Square value={this.state.squares[9]} 
                onClick = {()=>this.handleClick(9)} />
              </div>

        </div>
     );
  }
 
}

export default Board;
