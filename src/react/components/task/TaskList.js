import React from "react";
import TaskCard from "./TaskCard.js";
import TaskStatusFilter from "./TaskStatusFilter.js";

class TaskList extends React.Component {
  /**
   * Método Constructor
   * @param props (object) : Herdado de React.Component
   */
  constructor(props) {
    super(props);
  }

  /**
   * Método Render herdado de React.Component
   */
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
