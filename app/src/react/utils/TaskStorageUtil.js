class TaskStorageUtil {
  constructor() {
    localStorage.setItem("tasklist", JSON.stringify([]));
  }
  getList() {return JSON.parse(localStorage.getItem("tasklist"))}

  setItem(item) {
    let list = this.getList();
    list.push(item);
    localStorage.setItem("tasklist", JSON.stringify(list));
  }

  deleteItem(id) {
    let list  = this.getList(),
        index = list.map(v => v.id).indexOf(id);

    list.splice(index, 1);
    localStorage.setItem("tasklist", JSON.stringify(list));
  }

  updateItem(query, mod) {
    let list  = this.getList(),
        key   = Object.keys(query)[0],
        val   = query[key],
        index = list.map(v => v[key]).indexOf(val);

    Object.keys(mod).forEach(k => list[index][k] = mod[k]);
    localStorage.setItem("tasklist", JSON.stringify(list));
  }
}

export default new TaskStorageUtil();
