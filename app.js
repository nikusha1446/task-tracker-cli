#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const TASK_FILE = path.join(__dirname, 'tasks.json');

function loadTasks() {
  try {
    if (!fs.existsSync(TASK_FILE)) {
      return [];
    }

    const data = fs.readFileSync(TASK_FILE, 'utf8');

    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading tasks file:', error.message);
    return [];
  }
}

function saveTasks(tasks) {
  try {
    const data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(TASK_FILE, data, 'utf8');
  } catch (error) {
    console.error('Error saving tasks:', error.message);
  }
}

function generateId(tasks) {
  if (tasks.length === 0) {
    return 1;
  }

  const maxId = Math.max(...tasks.map((task) => task.id));
  return maxId + 1;
}

function addTask(description) {
  if (!description || description.trim() === '') {
    console.log('Error: Description must be provided');
    return;
  }

  const tasks = loadTasks();

  const newTask = {
    id: generateId(tasks),
    description: description.trim(),
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  saveTasks(tasks);

  console.log(`Task added successfully (ID: ${newTask.id})`);
}

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'add':
    const description = args[1];
    addTask(description);
    break;
  default:
    console.log('Unknown command. Available commands: add');
}
