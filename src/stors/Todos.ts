import { defineStore } from "pinia";
import {
  collection,
  getDocs,
  Timestamp,
  query,
  orderBy,
  limit,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { Todo } from "@/interfaces/Todo";
import { firestore } from "@/main";

interface Store {
  data: Todo[];
  isFetchLoading: boolean;
  isCreateLoading: boolean;
}

export const useTodosStore = defineStore("TodosStore", {
  state: () =>
    ({
      data: [] as Todo[],
      isFetchLoading: false,
      isCreateLoading: false,
    } as Store),
  getters: {
    todos: (state) => [...state.data].reverse(),
  },
  actions: {
    async fetchTodos(limitCount = 7) {
      this.isFetchLoading = true;

      const todosQuery = query(
        collection(firestore, "todos"),
        orderBy("createdAt"),
        limit(limitCount)
      );
      const docs = await getDocs(todosQuery);

      docs.forEach((doc) => {
        const todo = doc.data() as Todo;
        this.data.push(todo);
      });

      this.isFetchLoading = false;
    },
    async onCreate(todo: Omit<Todo, "id">) {
      this.isCreateLoading = true;

      const newTodoRef = doc(collection(firestore, "todos"));
      const data = {
        ...todo,
        id: newTodoRef.id,
        createdAt: Timestamp.now(),
      };
      await setDoc(newTodoRef, data);

      this.data.push(data);
      this.isCreateLoading = false;
    },
    async onEdit(editedTodo: Todo) {
      await updateDoc(doc(firestore, `todos/${editedTodo.id}`), {
        ...editedTodo,
      });

      const index = this.data.findIndex(({ id }) => id === editedTodo.id);
      this.data[index] = editedTodo;
    },
    async onDelete(todoId: Todo["id"]) {
      await deleteDoc(doc(firestore, `todos/${todoId}`));

      this.data = this.data.filter(({ id }) => id !== todoId);
    },
  },
});
