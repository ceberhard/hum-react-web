import React from 'react';
import './App.css';
import AddTaskForm from './containers/AddTaskForm';
import TaskList from './components/tasklist';

function App() {
  return (
    <div className="App">
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
