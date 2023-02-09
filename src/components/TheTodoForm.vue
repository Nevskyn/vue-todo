<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";
import AppInput from "@/components/AppInput.vue";
import AppTextarea from "@/components/AppTextarea.vue";
import AppButton from "@/components/AppButton.vue";
import { Todo } from "@/interfaces/Todo";

interface Props {
  isLoading?: boolean;
}
interface Emits {
  (e: "onCreate", value: Omit<Todo, "id">): Promise<void>;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const title = ref("");
const body = ref("");

const onSubmit = () => {
  emits("onCreate", {
    title: title.value,
    body: body.value,
    userId: "1",
    completed: false,
  });

  title.value = "";
  body.value = "";
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-100">
    <AppInput v-model="title" placeholder="Title" class="mb-3" />
    <AppTextarea v-model="body" placeholder="Description" class="mb-3" />
    <AppButton
      :isLoading="props.isLoading"
      type="submit"
      label="Create"
      class="w-100"
    />
  </form>
</template>
