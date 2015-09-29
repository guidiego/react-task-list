import Alt from "../dispatcher.js";

class TaskAction {
  attachTask(message) {
    this.dispatch(message);
  }

  deleteTask(id) {
    this.dispatch(id);
  }

  changeStatus(params) {
    this.dispatch(params);
  }
}

export default Alt.createActions(TaskAction);
