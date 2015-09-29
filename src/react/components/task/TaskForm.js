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
    var input = $("#taskInput"),
        val   = input.val();

    if (val.replace(/ /gi, "") === "") {
      input.parent().addClass("has-error");
      input.attr("placeholder", "Insira ao menos uma letra!");
    } else {
      input.val("");
      input.parent().removeClass("has-error");
      input.attr("placeholder", "Insira sua tarefa...");
      console.log(TaskAction.attachTask(val));
    }
  }

  /**
   * Método Render herdado de React.Component
   */
  render() {
    return (
      <form id="taskForm" onSubmit={this.handleSubmit}>
        <div className="input-group row">
          <span onClick={this.handleSubmit} className="input-group-addon">
            <i className="glyphicon glyphicon-plus"></i>
          </span>
          <input autoComplete="off" type="text" id="taskInput" className="form-control" placeholder="Insira sua tarefa..." />
        </div>

        <TaskDateFilter />
      </form>
    )
  }
}

export default TaskForm;
