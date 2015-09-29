import React from "react";
import TaskAction from "../../actions/TaskAction.js"

class TaskDateFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  filterByDate(type) {
    TaskAction.filterByDate(type);
  }
  render() {
    return (
      <div className="date-filter row">
        <div className="col-xs-6">
          <button className="btn btn-block btn-default" onClick={this.filterByDate.bind(this, true)}>Mais Recentes</button>
        </div>
        <div className="col-xs-6">
          <button className="btn btn-block btn-default" onClick={this.filterByDate.bind(this, false)}>Mais Antigas</button>
        </div>
      </div>
    )
  }
}

export default TaskDateFilter;
