import React from "react";
import TaskAction from "../../actions/TaskAction.js"

class TaskCard extends React.Component {
  /**
   * Método Constructor
   * @param props (object) : Herdado de React.Component
   */
  constructor(props) {
    super(props);
  }

  /**
   * Verifica o status da Tarefa para definir o botão de ação (Fechar | Abrir) tarefa
   * @var this.props.info.open (boolean) : Estado da Tarefa
   */
  handleButton() {
    if(this.props.info.open) {
      return(
        <button className="btn btn-success" onClick={this.changeStatus.bind(this, false)}>
          <i className="glyphicon glyphicon-ok"></i>
        </button>
      )
    } else {
      return (
        <button className="btn btn-warning" onClick={this.changeStatus.bind(this, true)}>
          <i className="glyphicon glyphicon-minus"></i>
        </button>
      )
    }
  }

  /**
   * Chama a ação de Delete da Tarefa
   * @var this.props.info.id (int) : Propriedade ID da tarefa
   */
  deleteTask(){TaskAction.deleteTask(this.props.info.id)}

  /**
   * Chama a ação de Mudança de Status
   * @var this.props.info.id (int) : Propriedade ID da tarefa
   * @param status (boolean) : Status da tarefa
   */
  changeStatus(status){TaskAction.changeStatus({id:this.props.info.id, status:status})}

  /**
   * Método Render herdado de React.Component
   */
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
          {this.handleButton()}
        </div>
      </article>
    )
  }
}

export default TaskCard;
