import React, { Component } from 'react';
import './App.css';
import ToDoList from "./to-do/to-do-list";
import ToDoItems from './to-do/to-do-items';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.addTaskHandler = this.addTaskHandler.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.inputElement = React.createRef();
  }
  state = {
    currentItem : {task: '', key: ''},
    taskList: []
  }
  inputHandler(e) {
    this.setState({currentItem: {task: e.target.value, key:Date.now()}});
  }
  addTaskHandler(e) {
    e.preventDefault();
    if (this.state.currentItem.task) {
      this.setState({taskList: [...this.state.taskList,  this.state.currentItem], currentItem: {task: '', key: ''}});
    }
  }
  removeTask(listItem) {
    const newTaskList = this.state.taskList.length && this.state.taskList.filter((taskItem)=> {
      return (taskItem.task !== listItem.task || taskItem.key !== listItem.key)
    });
    this.setState({taskList: newTaskList});
  }
  render() {
    return (
      <div className="App">
        <header>
            <h1>Todo App</h1>
        </header>
        <div className="to-do-container">
          <ToDoList addTaskHandler={this.addTaskHandler} inputHandler={this.inputHandler} task={this.state.currentItem.task} inputElement={this.inputElement}/>
          <ToDoItems taskList={this.state.taskList} removeItem={this.removeTask} />
        </div>
      </div>
    );
  }
}

export default App;
