import React from "react";
import TaskAction from "../../actions/TaskAction.js"

class TaskDateFilter extends React.Component {
  /**
   * Método Constructor
   * @param props (object) : Herdado de React.Component
   */
  constructor(props) {
    super(props);
  }

  /**
   * Chama o método de Filtrar por Data
   * @param type (boolean) : Tipos de filtro -> True = ASC, False = DESC
   */
  filterByDate(type) { TaskAction.filterByDate(type)}

  /**
   * Método Render herdado de React.Component
   */
  render() {
    return (
      <div className="date-filter row">
        <div className="col-xs-6">
          <button type="button" className="btn btn-block btn-default" onClick={this.filterByDate.bind(this, "ASC")}>Mais Recentes</button>
        </div>
        <div className="col-xs-6">
          <button type="button" className="btn btn-block btn-default" onClick={this.filterByDate.bind(this, "DESC")}>Mais Antigas</button>
        </div>
      </div>
    )
  }
}

export default TaskDateFilter;
