// src/Task.js
import React from 'react';

function Task({ task, updateTask, deleteTask }) {
  return (
    <div className="task">
      <h3>{task.name}</h3>
      <p>Fecha de creación: {task.createdAt}</p>
      <p>Fecha de actualización: {task.updatedAt}</p>
      <p>Responsable: {task.responsible}</p>
      <button onClick={() => updateTask({ ...task, name: "Nueva Tarea" })}>Actualizar</button>
      <button onClick={() => deleteTask(task.id)}>Borrar</button>
    </div>
  );
}

export default Task;
