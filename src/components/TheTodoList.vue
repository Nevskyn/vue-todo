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

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <ol class="list-group">
    <TheTodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @onEdit="$emit('onEdit', $event)"
      @onDelete="$emit('onDelete', $event)"
    />
  </ol>
</template>
