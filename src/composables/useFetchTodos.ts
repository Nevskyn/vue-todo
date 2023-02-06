import { onMounted, Ref, ref } from "vue";
import axios from "axios";
import { Todo } from "@/interfaces/Todo";

export interface UseFetchTodosReturn {
  todos: Ref<Todo[]>;
  isLoading: Ref<boolean>;
}

export const useFetchTodos = (): UseFetchTodosReturn => {
  const todos = ref<Todo[]>([]);
  const isLoading = ref(false);

  const fetch = async (limit = 7) => {
    isLoading.value = true;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    todos.value = res.data;
    isLoading.value = false;
  };

  onMounted(fetch);

  return { todos, isLoading };
};
