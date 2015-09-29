import React from "react";
import TaskAction from "../../actions/TaskAction.js"

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
  }

  static handleButton(__clazz) {
    var open = __clazz.props.info.open;
    if(open) {
      return(
        <button className="btn btn-success" onClick={__clazz.changeStatus.bind(__clazz, false)}>
          <i className="glyphicon glyphicon-ok"></i>
        </button>
      )
    } else {
      return (
        <button className="btn btn-warning" onClick={__clazz.changeStatus.bind(__clazz, true)}>
          <i className="glyphicon glyphicon-minus"></i>
        </button>
      )
    }
  }

  deleteTask(){TaskAction.deleteTask(this.props.info.id)}
  changeStatus(status){TaskAction.changeStatus({id:this.props.info.id, status:status})}


  render() {
    return (
      <article className="row">
        <div className="col-xs-10">
          <h5>
            {this.props.info.message}
          </h5>
        </div>
        <div className="col-xs-2">
          <button className="btn btn-danger" onClick={this.deleteTask.bind(this)}>
            <i className="glyphicon glyphicon-remove"></i>
          </button>
          {TaskCard.handleButton(this)}

        </div>
      </article>
    )
  }
}

export default TaskCard;
