<script setup lang="ts">
import { ref, defineEmits } from "vue";
import AppInput from "@/components/AppInput.vue";
import AppTextarea from "@/components/AppTextarea.vue";
import AppButton from "@/components/AppButton.vue";
import { Todo } from "@/interfaces/Todo";

interface Emits {
  (e: "onCreate", value: Todo): Promise<void>;
}

const emits = defineEmits<Emits>();

const title = ref("");
const body = ref("");

const onSubmit = () => {
  emits("onCreate", {
    title: title.value,
    body: body.value,
    userId: "1",
    id: Math.random() * 100,
    checked: false,
  });

  title.value = "";
  body.value = "";
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-100">
    <AppInput v-model="title" placeholder="Title" class="mb-3" />
    <AppTextarea v-model="body" placeholder="Description" class="mb-3" />
    <AppButton type="submit" label="Create" class="w-100" />
  </form>
</template>
