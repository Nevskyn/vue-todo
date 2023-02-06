<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";
interface Props {
  modelValue: string;
  placeholder?: string;
}
interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  placeholder: "",
});
const emits = defineEmits<Emits>();

const onChangeInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="input-group">
    <input
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="onChangeInput"
      type="text"
      class="form-control"
    />
  </div>
</template>
