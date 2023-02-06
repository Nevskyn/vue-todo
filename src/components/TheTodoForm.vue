<script setup lang="ts">
import { ref, defineEmits } from "vue";
import AppInput from "@/components/AppInput.vue";
import AppTextarea from "@/components/AppTextarea.vue";
import AppButton from "@/components/AppButton.vue";

interface Form {
  title: string;
  body: string;
}
interface Emits {
  (e: "onCreate", value: Form): void;
}

defineEmits<Emits>();

const form = ref({ title: "", body: "" });
</script>

<template>
  <form
    @submit.prevent="$emit('onCreate', form), (form = { title: '', body: '' })"
    class="w-100"
  >
    <AppInput v-model="form.title" placeholder="Title" class="mb-3" />
    <AppTextarea v-model="form.body" placeholder="Description" class="mb-3" />
    <AppButton type="submit" label="Create" class="w-100" />
  </form>
</template>
