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

  filterByStatus(status) {
    this.dispatch(status);
  }

  filterByDate(type) {
    this.dispatch(type);
  }
}

export default Alt.createActions(TaskAction);
