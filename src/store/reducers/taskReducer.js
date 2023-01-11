import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask(tasks, action) {
      tasks.push(action.payload);
    },
    removeTask(tasks, action) {
      tasks.splice(action.payload, 1);
    },
    toggleTaskStatus(tasks, action) {
      const index = tasks.findIndex((task) => task._id === action.payload);
      tasks[index].completed = !tasks[index].completed;
    },
  },
});

export const { addTask, removeTask, toggleTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;

// Selectors
export const getCompletedTasks = (state) =>
  state.entities.tasks.filter((task) => task.completed);
