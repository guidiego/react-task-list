import React from "react";
import TaskAction from "../../actions/TaskAction.js";
import TaskDateFilter from "./TaskDateFilter.js";

class TaskForm extends React.Component {
  /**
   * Método Constructor
   * @param props (object) : Herdado de React.Component
   */
  constructor(props) {
    super(props);
  }

  /**
   * Coleta a anotação/tarefa que o usuario submeteu, salva e limpa o campo
   * @param e (object) : Evento
   */
  handleSubmit(e){
    e.preventDefault();
    let input = document.getElementById('taskInput'),
        val   = input.value;
    input.value = "";
    TaskAction.attachTask(val);
  }

  /**
   * Método Render herdado de React.Component
   */
  render() {
    return (
      <form id="taskForm" onSubmit={this.handleSubmit}>
        <div className="input-group row">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-plus"></i>
          </span>
          <input type="text" id="taskInput" className="form-control" placeholder="Insira sua tarefa..." />
        </div>

        <TaskDateFilter />
      </form>
    )
  }
}

export default TaskForm;
