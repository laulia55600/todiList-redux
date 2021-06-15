import React, { Component } from "react";
import AddTodo from './components/AddToDo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className='container p-5'>
        <h4>Ajouter Une todo</h4>
        <hr className='my-4' />
        <AddTodo />
        <hr className='my-4'/>
        <div className='card'>
          <div className="card-header d-flex flex-row align-item-center">
            <span className="flex-fill">Todo list</span>
          <Filter />
          </div>
          <div className='card-body'>
            <TodoList/>         
          </div>
        </div>
      </div>
    );
  }
}

export default App;
