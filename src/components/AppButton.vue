<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";
interface Props {
  label: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}
interface Emits {
  (e: "onClick"): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  label: "",
});
const emits = defineEmits<Emits>();
</script>

<template>
  <button
    :type="props.type"
    @click="emits('onClick')"
    class="btn btn-outline-success"
  >
    {{ label }}
  </button>
</template>
