# Task Tracker CLI

A simple and efficient command-line interface (CLI) application to track and manage your tasks. Built with Node.js, this tool helps you organize what you need to do, what you're currently working on, and what you've completed.

## 🚀 Features

- **Add new tasks** with automatic ID generation
- **List all tasks** or filter by status
- **Update task descriptions**
- **Delete tasks** you no longer need
- **Mark tasks as in-progress** when you start working
- **Mark tasks as done** when completed
- **Visual status indicators** with emojis
- **Persistent storage** with JSON file
- **Error handling** for invalid inputs

## 🛠️ Technical Details

- **Built with**: Node.js
- **Storage**: JSON file in local directory
- **Dependencies**: None (uses only Node.js built-in modules)
- **Error Handling**: Comprehensive validation and error messages

## 📦 Installation

1. **Clone or download** this repository
   ```bash
   git clone https://github.com/nikusha1446/task-tracker-cli.git
   cd task-tracker-cli
   ```
2. **Make the script executable** (Mac/Linux):
   ```bash
   chmod +x index.js
   ```
3. **Run the application**:

   ```bash
   # Direct execution
   ./index.js

   # Or with Node.js explicitly
   node index.js
   ```

## 📖 Usage

### Add a New Task

```bash
node index.js add "Buy groceries"
node index.js add "Complete project documentation"
```

### List Tasks

```bash
# List all tasks
node index.js list

# List tasks by status
node index.js list todo
node index.js list in-progress
node index.js list done
```

### Update a Task

```bash
node index.js update 1 "Buy groceries and cook dinner"
```

### Delete a Task

```bash
node index.js delete 1
```

### Mark Task Status

```bash
# Mark as in progress
node index.js mark-in-progress 1

# Mark as done
node index.js mark-done 1
```

## 📄 Task Properties

Each task contains the following information:

| Property      | Type   | Description                                    |
| ------------- | ------ | ---------------------------------------------- |
| `id`          | Number | Unique identifier for the task                 |
| `description` | String | Short description of the task                  |
| `status`      | String | Current status (`todo`, `in-progress`, `done`) |
| `createdAt`   | String | ISO timestamp when task was created            |
| `updatedAt`   | String | ISO timestamp when task was last modified      |

## 📁 File Storage

Tasks are stored in a `tasks.json` file in the same directory as the script. The file is automatically created when you add your first task.

Example `tasks.json` structure:

```json
[
  {
    "id": 1,
    "description": "Buy groceries",
    "status": "todo",
    "createdAt": "2025-09-15T10:30:00.000Z",
    "updatedAt": "2025-09-15T10:30:00.000Z"
  },
  {
    "id": 2,
    "description": "Walk the dog",
    "status": "in-progress",
    "createdAt": "2025-09-15T11:00:00.000Z",
    "updatedAt": "2025-09-15T11:15:00.000Z"
  }
]
```

## 📚 Commands Reference

| Command            | Arguments            | Description                        | Example                      |
| ------------------ | -------------------- | ---------------------------------- | ---------------------------- |
| `add`              | `<description>`      | Add a new task                     | `add "Buy groceries"`        |
| `list`             | `[status]`           | List all tasks or filter by status | `list` or `list done`        |
| `update`           | `<id> <description>` | Update task description            | `update 1 "New description"` |
| `delete`           | `<id>`               | Delete a task                      | `delete 1`                   |
| `mark-in-progress` | `<id>`               | Mark task as in progress           | `mark-in-progress 1`         |
| `mark-done`        | `<id>`               | Mark task as done                  | `mark-done 1`                |
