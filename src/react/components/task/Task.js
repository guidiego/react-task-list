//Imports
import React from "react";
import TaskList from "./TaskList.js";
import TaskForm from "./TaskForm.js";
import TaskStore from "../../stores/TaskStore.js";

class Task extends React.Component {
  /**
   * Método Constructor
   * @param props (object) : Herdado de React.Component
   */
  constructor(props) {
    super(props);
    this.state = TaskStore.getState();
  }

  /**
   * Método de inicialização do componeteutiliza da Framework Alt para atribuir
   * um listener que permite a troca de estado quando o Store for modificado
   */
  componentDidMount() {
    var _clazz = this;
    TaskStore.listen(function (state){
      _clazz.setState(state);
    });
  }

  /**
   * Método Render herdado de React.Component
   */
  render() {
    return (
      <div>
        <TaskForm />
        <TaskList list={this.state.list}/>
      </div>
    )
  }
}

export default Task;
