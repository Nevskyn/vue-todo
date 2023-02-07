import axios from "axios";
import { defineStore } from "pinia";
import { Todo } from "@/interfaces/Todo";

export const useTodosStore = defineStore("TodosStore", {
  state: () => ({
    data: [] as Todo[],
    isLoading: false,
  }),
  getters: {
    todos: (state) => [...state.data].reverse(),
  },
  actions: {
    async fetchTodos(limit = 7) {
      this.isLoading = true;
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );

      this.data = res.data;
      this.isLoading = false;
    },
    onCreate(todo: Todo) {
      this.data.push(todo);
    },
    onEdit(editedTodo: Todo) {
      const index = this.data.findIndex(({ id }) => id === editedTodo.id);
      this.data[index] = editedTodo;
    },
    onDelete(todoId: Todo["id"]) {
      this.data = this.data.filter(({ id }) => id !== todoId);
    },
  },
});
