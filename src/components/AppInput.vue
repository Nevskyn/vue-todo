<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";
interface Props {
  modelValue: string;
  placeholder?: string;
}
interface Emits {
  (e: "update:modelValue", value: string): void;
}

withDefaults(defineProps<Props>(), {
  modelValue: "",
  placeholder: "",
});
defineEmits<Emits>();
</script>

<template>
  <div class="input-group">
    <input
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      class="form-control"
    />
  </div>
</template>
