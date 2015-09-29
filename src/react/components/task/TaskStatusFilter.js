import React from "react";
import TaskCard from "./TaskCard.js";
import TaskAction from "../../actions/TaskAction.js"

class TaskStatusFilter extends React.Component {
  /**
   * Método Constructor
   * @param props (object) : Herdado de React.Component
   */
  constructor(props) {
    super(props);
  }

  /**
   * Chama o método de Filtragem de Status
   * @param status (boolean) : Tipo de status pelo qual as tarefas serão filtradas
   */
  filterByStatus(status) { TaskAction.filterByStatus(status)}

  /**
   * Método Render herdado de React.Component
   */
  render() {
    return (
      <div className="status-filter text-right">
        <label>Filtrar por :</label>
        <button className="btn btn-xs btn-success" onClick={this.filterByStatus.bind(this, false)}>Prontas</button>
        <button className="btn btn-xs btn-warning" onClick={this.filterByStatus.bind(this, true)}>A fazer</button>
        <button className="btn btn-xs btn-danger" onClick={this.filterByStatus.bind(this, null)}>Resetar</button>
      </div>
    )
  }
}

export default TaskStatusFilter;
