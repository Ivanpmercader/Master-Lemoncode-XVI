<script setup> 
import { ref, computed } from 'vue';
import { useTodoStore } from '~/stores/todo';
import { CheckSquare, Square, Trash2, Plus } from 'lucide-vue-next';

const todoStore = useTodoStore();
const newTask = ref('');
const editingTaskId = ref(null);
const editedText = ref('');
const filter = ref('all');
const searchQuery = ref('');
const sortBy = ref('default');

const addTask = () => {
  if (newTask.value.trim()) {
    todoStore.addTask(newTask.value);
    newTask.value = '';
  }
};

const startEditing = (task) => {
  editingTaskId.value = task.id;
  editedText.value = task.text;
};

const saveEdit = (task) => {
  if (editedText.value.trim()) {
    todoStore.updateTask(task, editedText.value);
  }
  editingTaskId.value = null;
};

const filteredTasks = computed(() => {
  let tasks = [...todoStore.tasks];

  if (filter.value === 'completed') tasks = tasks.filter(task => task.completed);
  else if (filter.value === 'pending') tasks = tasks.filter(task => !task.completed);

  if (searchQuery.value.trim()) {
    tasks = tasks.filter(task =>
      task.text.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  return tasks;
});

const sortedTasks = computed(() => {
  let tasks = [...filteredTasks.value];

  if (sortBy.value === 'alphabetical') tasks.sort((a, b) => a.text.localeCompare(b.text));
  else if (sortBy.value === 'completed-first') tasks.sort((a, b) => Number(b.completed) - Number(a.completed));
  else if (sortBy.value === 'pending-first') tasks.sort((a, b) => Number(a.completed) - Number(b.completed));

  return tasks;
});

const isSearchActive = computed(() => searchQuery.value.trim().length > 0);
</script>

<template>
  <div class="container">
    <h1>To-Do Task List</h1>

    <div class="task-form">
      <input v-model="newTask" placeholder="New task..." />
      <button @click="addTask" class="btn-blue-light" aria-label="Add task">
        <Plus />
        Add
      </button>
    </div>

    <div class="search-bar">
      <input v-model="searchQuery" placeholder="Search Task ..." />
    </div>

    <div class="actions">
      <button @click="todoStore.completeAllTasks" :disabled="isSearchActive" class="btn-blue-light" aria-label="Complete all">
        <CheckSquare /> Complete all
      </button>
      <button @click="todoStore.removeCompletedTasks" :disabled="isSearchActive" class="btn-red" aria-label="Delete all">
        <Trash2 />
        Delete all Completed
      </button>
    </div>

    <div class="filters">
      <select v-model="filter" aria-label="Filtrar tareas">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <select v-model="sortBy" aria-label="Ordenar tareas">
        <option value="default">Whithout order</option>
        <option value="alphabetical">A-Z</option>
        <option value="completed-first">Completed First</option>
        <option value="pending-first">Pending First</option>
      </select>
    </div>

    <ul>
      <li v-for="task in sortedTasks" :key="task.id" :class="{ 'completed-task': task.completed }">
        <!-- <span :class="{ completed: task.completed }">{{ task.text }}</span> -->
        <p v-if="editingTaskId !== task.id" @dblclick="startEditing(task)" :class="{ completed: task.completed }">
          {{ task.text }}
        </p>
        <input v-else v-model="editedText" @blur="saveEdit(task)" @keyup.enter="saveEdit(task)" class="edit-input" autofocus/>
        <div class="task-buttons">
          <button @click="todoStore.toggleTask(task.id)" :aria-label="task.completed ? 'Uncheck Task' : 'Complete Task'" class="btn-blue-light">
            <CheckSquare v-if="task.completed"/>
            <Square v-else/>
          </button>
          <button @click="todoStore.removeTask(task.id)" class="btn-red" aria-label="Delete Task">
            <Trash2 />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.task-form, .search-bar, .filters, .actions {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
}

input, select {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid #1e90ff;
  background-color: #f0f8ff;
  color: #004080;
  transition: border 0.3s ease, background 0.3s ease;
  width: 100%;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 14px;
    transition: background 0.2s ease, transform 0.1s ease;
    min-width: 40px;
}

.btn-blue-light {
  background: #0e78b9;
  color: #ffffff;
}
.btn-blue-light:hover {
  background: #5fa8d3;
}

.btn-red {
  background: #ff7171;
  color: #ffffff;
}
.btn-red:hover {
  background: #b83030;
}

.task-buttons{
    display: flex;
    gap: 10px;
}

ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  background: #f4f4f4;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}

.completed-task {
    background-color: #92cf92;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
</style>