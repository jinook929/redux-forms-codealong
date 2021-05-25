import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
