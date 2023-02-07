<script setup lang="ts">
import { onMounted } from "vue";
import TheTodoForm from "@/components/TheTodoForm.vue";
import TheTodoList from "@/components/TheTodoList.vue";
import AppLoader from "@/components/AppLoader.vue";
import { useTodosStore } from "@/stors/Todos";

const todosStore = useTodosStore();

onMounted(todosStore.fetchTodos);
</script>

<template>
  <div
    class="container todo__container d-flex flex-column justify-content-center"
    :class="{ 'flex-grow-1': todosStore.isLoading }"
  >
    <div v-if="!todosStore.isLoading">
      <TheTodoForm @onCreate="todosStore.onCreate" />
      <TheTodoList
        :todos="todosStore.todos"
        @onEdit="todosStore.onEdit"
        @onDelete="todosStore.onDelete"
        class="mt-5"
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
