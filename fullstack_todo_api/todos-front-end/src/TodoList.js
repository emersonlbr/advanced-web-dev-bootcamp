import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

// importing everthing from the api file
import * as apiCalls from './api';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);

  }

  componentWillMount() {
   this.loadTodos();
  }

  async loadTodos() {
      let todos = await apiCalls.getTodos();
      this.setState({todos});
  }

  async addTodo(val) {
    // await waits to the action to perform
    let newTodo = await apiCalls.createTodo(val);
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  async deleteTodo(id) {
    await apiCalls.removeTodo(id);
    // everything that was there minus the one we want to delete
    const todos = this.state.todos.filter(todo => todo._id !== id);
    this.setState({todos: todos});
  }

  async toggleTodo(todo) {
    let updatedTodo = await apiCalls.updatedTodo(todo);
    const todos = this.state.todos.map(t =>
    (t._id === updatedTodo._id)
    ? {...t, completed: !t.completed}
    : t
    )
    this.setState({todos: todos});
  }
  
  render() {
    const todos = this.state.todos.map((t) => (
      <TodoItem 
        key={t._id}
        {...t}
        // we need to bind it here
        onDelete={this.deleteTodo.bind(this, t._id)}
        onToggle={this.toggleTodo.bind(this, t)}
      />
    ));
    return (
      <div className="">
        <h1>Todo List</h1>
        {/* so you have access to it from the todo Form */}
        <TodoForm addTodo={this.addTodo}/>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;