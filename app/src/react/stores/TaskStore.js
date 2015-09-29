import Alt from "../dispatcher.js";
import TaskAction from "../actions/TaskAction.js";
import ls from "../utils/TaskStorageUtil.js";

class TaskStore {
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

  deleteTask(id) {
    var index = this.list.map(i => i.id).indexOf(id);
    this.list.splice(index, 1);
    ls.deleteItem(id);
  }

  changeStatus(params) {
    var index  = this.list.map(i => i.id).indexOf(params.id);
    this.list[index].open = params.status;
    ls.updateItem({id : params.id}, {open : params.status});
  }

  filterByStatus(status) {
    if (status === null) this.showList = this.list
    else this.showList = this.list.filter(v => v.open == status)
  }

  filterByDate(type) {
    console.log(this.list.sort(this._dateDifASC));
    //this.showList = type ? this.list.sort(this._dateDifASC) : this.list.sort(this._dateDifDESC);
  }

  _dateDifDESC(a, b) {return a.date.getTime() - b.date.getTime()}
  _dateDifASC(a, b) {return a.date.getTime() + b.date.getTime()}
}

export default Alt.createStore(TaskStore, 'TaskStore');
