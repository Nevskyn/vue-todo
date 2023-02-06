<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import { Todo } from "@/interfaces/Todo";

interface Props {
  todo: Todo;
}
interface Emits {
  (e: "onEdit", todo: Todo): void;
  (e: "onDelete", todoId: Todo["id"]): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <input
      class="item__checkbox form-check-input my-auto"
      type="checkbox"
      :checked="todo.checked"
      @change="$emit('onEdit', { ...todo, checked: !todo.checked })"
      id="firstCheckbox"
    />
    <div class="ms-2" :class="{ 'text-decoration-line-through': todo.checked }">
      <div class="fw-bold">{{ todo.title }}</div>
      {{ todo.body }}
    </div>
    <span
      @click="$emit('onDelete', todo.id)"
      class="item__basket badge text-secondary rounded-pill"
      >X</span
    >
  </li>
</template>

<style scoped>
.item__checkbox {
  min-width: 1rem;
}
.item__basket {
  cursor: pointer;
}
</style>
