import React from 'react';

function Task({ task, updateTask, deleteTask }) {
  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.createdAt}</td>
      <td>{task.updatedAt}</td>
      <td>{task.responsible}</td>
      <td>
        <button onClick={() => updateTask({ ...task, updatedAt: new Date().toISOString() })}>
          Actualizar
        </button>
        <button onClick={() => deleteTask(task.id)}>Borrar</button>
      </td>
    </tr>
  );
}

export default Task;
