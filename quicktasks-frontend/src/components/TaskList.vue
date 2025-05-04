<template>
  <div class="task-list-container">
    <h2>Task List</h2>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <div class="task-info">
          <span class="task-title">{{ task.title }}</span>
          <span class="task-status">{{ task.status }}</span>
        </div>
        <div class="status-selector">
          <select v-model="task.status" @change="updateStatus(task)" class="status-dropdown">
            <option value="open">Open</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const tasks = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/tasks');
    tasks.value = response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    tasks.value = [
      { id: 1, title: "Task 1", status: "open" },
      { id: 2, title: "Task 2", status: "in progress" },
      { id: 3, title: "Task 3", status: "done" },
    ]; // Mock data if API fails
  }
});

const updateStatus = async (task) => {
  try {
    await axios.put(`http://localhost:8080/tasks/${task.id}`, task);
  } catch (error) {
    console.error("Error updating status:", error);
  }
};
</script>

<style scoped>
.task-list-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.task-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #f9f9f9;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.task-item:hover {
  background-color: #e0e0e0;
}

.task-info {
  flex-grow: 1;
}

.task-title {
  font-weight: bold;
  color: #333;
}

.task-status {
  color: #777;
}

.status-selector {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.status-dropdown {
  padding: 8px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  transition: border-color 0.3s;
}

.status-dropdown:focus {
  border-color: #42b883;
  outline: none;
}

.status-dropdown option {
  font-size: 1rem;
}
</style>
