//Imports
import React from "react";
import {Modal} from "react-bootstrap";

class ModalFirstTime extends React.Component {
  /**
   * Método Constructor
   * @param props (object) : Herdado de React.Component
   */
  constructor(props) {
    super(props);
    this.state = {status : true};

    if (localStorage.getItem("tasklistFirstTime") !== null && localStorage.getItem("tasklistFirstTime") !== undefined)
      this.state.status = false;
  }

  hideModal() {
    this.setState({status : false});
    $(".modal-backdrop").fadeOut();
  }

  removeFirstTime() {
    localStorage.setItem("tasklistFirstTime", false);
    this.hideModal();
  }

  /**
   * Método Render herdado de React.Component
   */
  render() {
    return (
      <Modal show={this.state.status} id="main-modal" onHide={this.hideModal.bind(this)}>
        <Modal.Header>
          <Modal.Title>Bem Vindo ao Anote Aqui!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Bem Vindo ao "Anote Aqui!", um simples TaskManager para você usar nos seus afazeres diários! Parece que é sua primeira vez aqui, então vamos entender como ele funciona:

            <div className="row">
              <div className="col-md-1">
                <div className="btn btn-warning">
                  <i className="glyphicon glyphicon-ok"></i>
                </div>
              </div>
              <div className="col-md-11">
                Isso significa que sua tarefa está na lista de tarefas <span className="label label-warning">A Fazer</span>. Se você clicar nesse botão, ele irá colocar sua Tarefa na lista de Tarefas <span className="label label-success">Prontas</span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-1">
                <div className="btn btn-success">
                  <i className="glyphicon glyphicon-ok"></i>
                </div>
              </div>
              <div className="col-md-11">
                Isso significa que sua tarefa está na lista de tarefas <span className="label label-success">Prontas</span>,. Se você clicar nesse botão, ele irá colocar sua Tarefa na lista de Tarefas <span className="label label-warning">A Fazer</span>.
              </div>
            </div>

            <div className="row">
              <div className="col-md-1">
                <div className="btn btn-danger">
                  <i className="glyphicon glyphicon-remove"></i>
                </div>
              </div>
              <div className="col-md-11">
                <strong>TOME CUIDADO!</strong> Esse botão deleta sua tarefa da lista!
              </div>
            </div>

            <h3>Filtros sempre ajudam!</h3>
            Existem filtros de data (Mais Recentes e Mais Antigas) abaixo do Campo de Inserir Task. Existe um outro filtro para Tipo de Lista de Tarefas no final da lista!

        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.hideModal.bind(this)} className="btn btn-default">Fechar</button>
          <button onClick={this.removeFirstTime.bind(this)} className="btn btn-primary">Não Me Lembre Mais</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalFirstTime;
