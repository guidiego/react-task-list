import React from "react";
import TaskCard from "./TaskCard.js";
import TaskAction from "../../actions/TaskAction.js"

class TaskStatusFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  filterBy(status) {
    TaskAction.filterByStatus(status);
  }

  render() {
    return (
      <div className="status-filter text-right">
        <label>Filtrar por :</label>
        <button className="btn btn-xs btn-success" onClick={this.filterBy.bind(this, false)}>Prontas</button>
        <button className="btn btn-xs btn-warning" onClick={this.filterBy.bind(this, true)}>A fazer</button>
        <button className="btn btn-xs btn-danger" onClick={this.filterBy.bind(this, null)}>Resetar</button>
      </div>
    )
  }
}

export default TaskStatusFilter;
