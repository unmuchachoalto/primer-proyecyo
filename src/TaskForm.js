// src/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [responsible, setResponsible] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      responsible: responsible,
    };
    addTask(newTask);
    setTaskName('');
    setResponsible('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Responsable"
        value={responsible}
        onChange={(e) => setResponsible(e.target.value)}
        required
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
