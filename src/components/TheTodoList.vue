<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import TheTodoItem from "@/components/TheTodoItem.vue";
import { Todo } from "@/interfaces/Todo";

interface Props {
  todos: Todo[];
}
interface Emits {
  (e: "onEdit", todo: Todo): void;
  (e: "onDelete", todoId: Todo["id"]): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
</script>

<template>
  <ol class="list-group">
    <TheTodoItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @onEdit="emits('onEdit', $event)"
      @onDelete="emits('onDelete', $event)"
    />
  </ol>
</template>
