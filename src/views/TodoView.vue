<script setup lang="ts">
import { computed } from "vue";
import TheTodoForm from "@/components/TheTodoForm.vue";
import TheTodoList from "@/components/TheTodoList.vue";
import AppLoader from "@/components/AppLoader.vue";
import { useTodos } from "@/composables/useTodos";

const { todos, isLoading, onCreate, onEdit, onDelete } = useTodos();

const reversedTodos = computed(() => [...todos.value].reverse());
</script>

<template>
  <div
    class="container todo__container d-flex flex-column justify-content-center"
    :class="{ 'flex-grow-1': isLoading }"
  >
    <div v-if="!isLoading">
      <TheTodoForm @onCreate="onCreate" />
      <TheTodoList
        :todos="reversedTodos"
        class="mt-5"
        @onEdit="onEdit"
        @onDelete="onDelete"
      />
    </div>
    <AppLoader v-else class="mt-5" />
  </div>
</template>

<style scoped>
.todo__container {
  max-width: 800px;
}
</style>
