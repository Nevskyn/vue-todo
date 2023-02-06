<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";
interface Props {
  label: string;
  type?: string;
  isLoading?: boolean;
}
interface Emits {
  (e: "onClick"): void;
}

withDefaults(defineProps<Props>(), {
  type: "button",
  label: "",
});
defineEmits<Emits>();
</script>

<template>
  <button
    :type="type"
    @click="$emit('onClick')"
    class="btn btn-outline-success"
  >
    {{ label }}
  </button>
</template>
