import React from "react";
import TaskCard from "./TaskCard.js";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="row" id="taskList">
        {this.props.list.map(i => {
          return(<TaskCard info={i}/>);
        })}

      </section>
    )
  }
}

export default TaskList;
