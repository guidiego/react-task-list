import React from "react";
import TaskAction from "../../actions/TaskAction.js"

class TaskDateFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="date-filter row">
        <div className="col-xs-6">
          <button className="btn btn-block btn-default">Mais Recentes</button>
        </div>
        <div className="col-xs-6">
          <button className="btn btn-block btn-default">Mais Antigas</button>
        </div>
      </div>
    )
  }
}

export default TaskDateFilter;
