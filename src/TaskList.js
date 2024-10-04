// src/TaskList.js
import React from 'react';
import Task from './Task';

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <table border="1">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Fecha de creación</th>
        <th>Fecha de actualización</th>
        <th>Responsable</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          updateTask={updateTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </tbody>
  </table>
);
}

export default TaskList;
