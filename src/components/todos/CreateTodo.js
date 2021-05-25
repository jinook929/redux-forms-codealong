import React, { Component } from 'react'
import {connect} from 'react-redux'
 
class CreateTodo extends Component {
  state = {text: ""}
  render() {
    return(
      <div>
        <p>Create Todo Component</p>
        <form onSubmit={(e) => {e.preventDefault(); this.props.dispatch({ type: 'ADD_TODO', payload: this.state }); this.setState({text: ""})}}>
          {/* this.props.addTodo(this.state)}}> */}
          <label htmlFor="todo">Add To-Do</label>
          <p>
            <input type="text" id="todo" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} />
            <button>Submit</button>
          </p>
        </form>
        {this.state.text}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return{
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })))
//   }
// }

// export default connect(null, mapDispatchToProps)(CreateTodo);
export default connect()(CreateTodo);
