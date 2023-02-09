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

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const onChangeCheckbox = () => {
  emits("onEdit", { ...props.todo, completed: !props.todo.completed });
};
</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <input
      class="item__checkbox form-check-input my-auto"
      type="checkbox"
      :checked="props.todo.completed"
      @change="onChangeCheckbox"
      id="firstCheckbox"
    />
    <div
      class="ms-2"
      :class="{ 'text-decoration-line-through': props.todo.completed }"
    >
      <div class="fw-bold">{{ props.todo.title }}</div>
      {{ props.todo.body }}
    </div>
    <span
      @click="emits('onDelete', props.todo.id)"
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
