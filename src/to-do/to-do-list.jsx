import React, {Component} from 'react';

class ToDoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus();
    }
    render() {
        return (
            <form className="to-do-list-form" onSubmit={this.props.addTaskHandler}>
                <input className="to-do__input" type="text" name="task" ref={this.props.inputElement} value={this.props.task} onChange={this.props.inputHandler} placeholder="Enter a task" required />
                <button className="to-do__button" type="submit">ADD</button>
            </form>
        );
    }
}

export default ToDoList;