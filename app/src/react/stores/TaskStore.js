import Alt from "../dispatcher.js";
import TaskAction from "../actions/TaskAction.js";

class TaskStore {
  constructor(){
    this.list = [
      {id: 0,message: "oaskdasok", open: true},
      {id: 1,message: "asd", open: false}
    ];

    this.bindListeners({
      attachTask   : TaskAction.ATTACH_TASK,
      deleteTask   : TaskAction.DELETE_TASK,
      changeStatus : TaskAction.CHANGE_STATUS
    });
  }

  attachTask(message) {
    let task = {
      id      : this.list.length,
      date    : new Date(),
      open    : true,
      message : message
    }

    this.list.push(task);
  }

  deleteTask(id) {
    var index = this.list.map(i => i.id).indexOf(id);
    this.list.splice(index, 1);
  }

  changeStatus(params) {
    var index  = this.list.map(i => i.id).indexOf(params.id);
    this.list[index].open = params.status;
  }
}

export default Alt.createStore(TaskStore, 'TaskStore');
