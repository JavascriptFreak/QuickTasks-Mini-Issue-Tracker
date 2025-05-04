<template>
  <div class="task-input-container">
    <h2>Create a New Task</h2>
    <div class="input-group">
      <input
        v-model="task.title"
        placeholder="Task Title"
        class="input-field"
        type="text"
      />
    </div>
    <div class="input-group">
      <input
        v-model="task.description"
        placeholder="Task Description"
        class="input-field"
        type="text"
      />
    </div>
    <button @click="createTask" class="submit-button">Create Task</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
        status: "open", // Default status
      },
    };
  },
  methods: {
    async createTask() {
      try {
        await axios.post("http://localhost:8080/tasks", this.task);
        this.task.title = "";
        this.task.description = "";
      } catch (error) {
        console.error("Error creating task:", error);
      }
    },
  },
};
</script>

<style scoped>
.task-input-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h2 {
  font-size: 1.8rem;
  color: #333;
  text-align: center;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 5px;
}

.input-field:focus {
  outline: none;
  border-color: #42b883;
}

.submit-button {
  padding: 12px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #369d6d;
}

.submit-button:disabled {
  background-color: #c2c2c2;
  cursor: not-allowed;
}
</style>
