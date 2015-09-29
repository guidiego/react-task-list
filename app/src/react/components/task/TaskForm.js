import React from "react";
import TaskAction from "../../actions/TaskAction.js"

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e){
    e.preventDefault();
    let input = document.getElementById('taskInput'),
        val   = input.value;
    input.value = "";
    TaskAction.attachTask(val);
  }
  render() {
    return (
      <form id="taskForm" onSubmit={this.handleSubmit}>
        <div className="input-group row">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-plus"></i>
          </span>
          <input type="text" id="taskInput" className="form-control" placeholder="Insira sua tarefa..." />
        </div>

        <div className="date-filter row">
          <div className="col-xs-6">
            <button className="btn btn-block btn-default">Mais Recentes</button>
          </div>
          <div className="col-xs-6">
            <button className="btn btn-block btn-default">Mais Antigas</button>
          </div>
        </div>
      </form>
    )
  }
}

export default TaskForm;
