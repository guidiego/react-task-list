import React from "react";
import Task from "./task/Task.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="text-center">
          <h2>Lista de Tarefas</h2>
        </header>
        <Task />
      </div>
    )
  }
}

export default App;
