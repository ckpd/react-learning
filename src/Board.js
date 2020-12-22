import {Component} from 'react'
import './index.css';

class Square extends Component {
  constructor(props){
    super(props);
    this.state = { value : this.props.value }
  
    this.action = this.action.bind(this);

  }
  
  action (){
    this.setState({value : "X"})
   
  }

  render(){
    return (
      <button className="square" onClick={ this.action }>
        {this.state.value}
      </button>
    )
  }

}





class Board extends Component {
   render(){
    const i = 3;
    return (
       <div>
          <Square value={i} />
        </div>
    );
  }
 
}

export default Board;
