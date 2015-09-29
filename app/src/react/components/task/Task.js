import React from "react";
import TaskList from "./TaskList.js";
import TaskForm from "./TaskForm.js";
import TaskStore from "../../stores/TaskStore.js";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = TaskStore.getState();
  }

  componentDidMount() {
    var _clazz = this;
    TaskStore.listen(function (state){
      _clazz.setState(state);
    });
  }

  render() {
    return (
      <div>
        <TaskForm />
        <TaskList list={this.state.list}/>
      </div>
    )
  }
}

export default Task;
