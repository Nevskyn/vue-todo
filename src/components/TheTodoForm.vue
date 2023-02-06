<script setup lang="ts">
import { ref, defineEmits, Ref } from "vue";
import AppInput from "@/components/AppInput.vue";
import AppTextarea from "@/components/AppTextarea.vue";
import AppButton from "@/components/AppButton.vue";
import { TodoForm } from "@/interfaces/Todo";

interface Emits {
  (e: "onCreate", value: Ref<TodoForm>): Promise<void>;
}

const emits = defineEmits<Emits>();

const form = ref({ title: "", body: "" });

const onSubmit = () => {
  emits("onCreate", form);
  form.value = { title: "", body: "" };
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-100">
    <AppInput v-model="form.title" placeholder="Title" class="mb-3" />
    <AppTextarea v-model="form.body" placeholder="Description" class="mb-3" />
    <AppButton type="submit" label="Create" class="w-100" />
  </form>
</template>
