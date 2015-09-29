import React from "react";
import TaskCard from "./TaskCard.js";
import TaskAction from "../../actions/TaskAction.js"

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
        <div className="status-filter text-right">
          <label>Filtrar por :</label>
          <button className="btn btn-xs btn-primary" onClick={this.filterBy.bind(this, false)}>Prontas</button>
          <button className="btn btn-xs btn-primary" onClick={this.filterBy.bind(this, true)}>A fazer</button>
          <button className="btn btn-xs btn-primary" onClick={this.filterBy.bind(this, null)}>Ambas</button>
        </div>
      </section>

    )
  }
}

export default TaskList;
