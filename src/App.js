import React from 'react';
import './App.css';
import AddTaskForm from './containers/AddTaskForm';
import TaskList from './components/tasklist';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

function App() {
  return (
    <div className="App">
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
