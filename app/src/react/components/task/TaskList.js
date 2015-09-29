import React from "react";
import TaskCard from "./TaskCard.js";
import TaskStatusFilter from "./TaskStatusFilter.js";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  filterBy(status) {
    TaskAction.filterByStatus(status);
  }

  render() {
    return (
      <section className="row" id="taskList">
        {this.props.list.map(i => {
          return(<TaskCard info={i}/>);
        })}
        <TaskStatusFilter />
      </section>

    )
  }
}

export default TaskList;
