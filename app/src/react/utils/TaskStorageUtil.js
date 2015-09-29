class TaskStorageUtil {
  /**
   * Pega a lista do LocalStorage e passa a mesma pra JSON
   * caso não exista a lista ele devolve um array vazio
   */
  getList() {return JSON.parse(localStorage.getItem("tasklist")) || []}

  /**
   * Coloca uma tarefa dentro da list no localStorage
   * @see TaskStore.attachTask
   * @param item (object) : Tarefa vinda do TaskStore
   */
  setItem(item) {
    let list = this.getList();
    list.push(item);
    localStorage.setItem("tasklist", JSON.stringify(list));
  }

  /**
   * Remove uma tarefa da lista no LocalStorage
   * @see TaskStore.deleteTask
   * @param id (int) : Propriedade ID da Tarefa vindo do TaskStore
   */
  deleteItem(id) {
    let list  = this.getList(),
        index = list.map(v => v.id).indexOf(id);

    list.splice(index, 1);
    localStorage.setItem("tasklist", JSON.stringify(list));
  }

  /**
   * Atualiza um item da lista em LocalStorage
   * @see TaskStore.changeStatus
   * @param query (object) : Objeto ao qual sera encontrado o item no LocalStorage
   * @param mod (object) : Propriedades que serão alteradas no elemento encontrado
   */
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
