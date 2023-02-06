import { Todo } from "@/interfaces/Todo";
import {
  useFetchTodos,
  UseFetchTodosReturn,
} from "@/composables/useFetchTodos";

interface UseTodosReturn extends UseFetchTodosReturn {
  onCreate: (formValues: Omit<Todo, "userId" | "id">) => Promise<void>;
  onEdit: (editedTodo: Todo) => void;
  onDelete: (todoId: Todo["id"]) => void;
}

export const useTodos = (): UseTodosReturn => {
  const { todos, isLoading } = useFetchTodos();

  const onCreate = async (formValues: Omit<Todo, "userId" | "id">) => {
    const newTodo = {
      ...formValues,
      userId: "1",
      id: Math.random() * 100,
    };
    todos.value.push(newTodo);
  };

  const onEdit = (editedTodo: Todo) => {
    const index = todos.value.findIndex(({ id }) => id === editedTodo.id);
    todos.value[index] = editedTodo;
  };

  const onDelete = (todoId: Todo["id"]) => {
    todos.value = todos.value.filter(({ id }) => id !== todoId);
  };

  return { todos, isLoading, onCreate, onEdit, onDelete };
};
