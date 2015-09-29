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
      <form className="row" onSubmit={this.handleSubmit}>
        <div className="input-group col-xs-12">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-plus"></i>
          </span>
          <input type="text" id="taskInput" className="form-control" placeholder="Insira sua tarefa..." />
        </div>
      </form>
    )
  }
}

export default TaskForm;
