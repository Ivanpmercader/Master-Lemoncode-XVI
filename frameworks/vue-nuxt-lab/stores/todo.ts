import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Task } from '~/types/task';

export const useTodoStore = defineStore(
  'todo',
  () => {
    const tasks = ref<Task[]>([]);

    const addTask = (text: string) => {
      tasks.value.push({ id: Date.now(), text, completed: false });
    };

    const toggleTask = (id: number) => {
      const task = tasks.value.find(task => task.id === id);
      if (task) task.completed = !task.completed;
    };

    const updateTask = (updatedTask: Task, text: string) => {
      const indexTask = tasks.value.indexOf(updatedTask);
      const updateTaskConditions = text.trim().length >= 0 && indexTask >= 0;
      if (updateTaskConditions) tasks.value[indexTask].text = text;
    };

    const removeTask = (id: number) => {
      tasks.value = tasks.value.filter(task => task.id !== id);
    };

    const completeAllTasks = () => {
      tasks.value.forEach(task => (task.completed = !task.completed));
    };

    const removeCompletedTasks = () => {
      tasks.value = tasks.value.filter(task => !task.completed);
    };

    return { 
      tasks, 
      addTask, 
      toggleTask, 
      removeTask, 
      completeAllTasks, 
      removeCompletedTasks,
      updateTask
     };
  },
  {
    persist: true
  }
);
