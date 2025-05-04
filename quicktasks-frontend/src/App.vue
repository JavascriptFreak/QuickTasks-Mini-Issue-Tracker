<script setup>
import TaskList from './components/TaskList.vue'
import TaskInput from './components/TaskInput.vue'
</script>

<template>
  <div id="app">
    <TaskInput />
    <TaskList />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.TaskInput, .TaskList {
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
}

.logo {
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.TaskInput {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.TaskList {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2c8e6e;
}
</style>
