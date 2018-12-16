import React, {Component} from "react";

class ToDoItems extends Component {
    renderListItem(listItem) {
        return (<li className="to-do-item" key={listItem.key}><p className="to-do-item__text">{listItem.task}</p><button className="to-do-item__button" onClick={() => {this.props.removeItem(listItem)}}>Delete</button></li>);
    }
    render() {
        const list = this.props.taskList;
        return <ul className="to-do-items">{list && list.map((listItem) => { return this.renderListItem(listItem)})}</ul>;
    };
}
export default ToDoItems;