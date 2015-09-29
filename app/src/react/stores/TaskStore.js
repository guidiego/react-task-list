import Alt from "../dispatcher.js";
import TaskAction from "../actions/TaskAction.js";
import ls from "../utils/TaskStorageUtil.js";

class TaskStore {
  /**
   * Método constructor
   * @var list : "Imutavel", guarda a lista de tarefas "sem" alterações
   * @var showList : Lista que sera modificada/apresentada pelo componente TaskList
   */
  constructor(){
    this.list = ls.getList() || [];
    this.showList = this.list;

    this.bindListeners({
      attachTask     : TaskAction.ATTACH_TASK,
      deleteTask     : TaskAction.DELETE_TASK,
      changeStatus   : TaskAction.CHANGE_STATUS,
      filterByStatus : TaskAction.FILTER_BY_STATUS,
      filterByDate   : TaskAction.FILTER_BY_DATE
    });
  }

  /**
   * Cria um objeto de tarefa a partir da mensagem enviada pelo usuario
   * @param message (string) : Mensagem captada do component TaskForm
   */
  attachTask(message) {
    let task = {
      id      : this.list.length,
      date    : new Date(),
      open    : true,
      message : message
    }

    ls.setItem(task);
    this.list.push(task);
  }

  /**
   * Deleta uma task a partir do id da tarefa
   * @param id (number) : Propriedade ID da Tarefa
   */
  deleteTask(id) {
    var index = this.list.map(i => i.id).indexOf(id);
    this.list.splice(index, 1);
    ls.deleteItem(id);
  }

  /**
   * Muda o estado da tarefa (atributo "open"), afim de colocar em finalizao/a fazer
   * @param params (object)
   * object.id (number) : Propriedade ID da Tarefa
   * object.status (boolean) : Estado que a Tarefa ira ser colocada
   */
  changeStatus(params) {
    var index  = this.list.map(i => i.id).indexOf(params.id);
    this.list[index].open = params.status;
    ls.updateItem({id : params.id}, {open : params.status});
  }

  /**
   * Filtra a lista por status
   * @param status (boolean | null) Estado desejado, caso venha null significa que a lista sera enviada inteira
   */
  filterByStatus(status) {
    if (status === null) this.showList = this.list
    else this.showList = this.list.filter(v => v.open == status)
  }

  /**
   * Filtra a lista pela data
   * @param type (boolean) Em caso de "true" a lista volta ASC, caso o contrario, em DESC
   */
  filterByDate(type) {
    this.showList = type ? this.list.sort(this._dateDifASC) : this.list.sort(this._dateDifDESC);
  }

  /**
   * Método consumido pelo .sort() para devolver a list em ordem DECRESCENTE
   * @see this.filterByDate
   * @param a/b (object) : Objetos da lista
   */
  _dateDifDESC(a, b) {
    let d1 = new Date(a.date),
        d2 = new Date(b.date)
    return d1.getTime() - d2.getTime()
  }

  /**
   * Método consumido pelo .sort() para devolver a list em ordem CRESCENTE
   * @see this.filterByDate
   * @param a/b (object) : Objetos da lista
   */
  _dateDifASC(a, b) {
    let d1 = new Date(a.date),
        d2 = new Date(b.date)
    return d1.getTime() + d2.getTime()
  }
}

export default Alt.createStore(TaskStore, 'TaskStore');
