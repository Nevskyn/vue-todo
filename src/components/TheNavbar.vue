<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { NAVBAR_TABS } from "@/constants/navigation";

const route = useRoute();
const currentPath = computed(() => route.path);
</script>

<template>
  <ul class="nav justify-content-center nav-pills py-2 mb-3 bg-dark">
    <li class="nav-item" v-for="tab in NAVBAR_TABS" :key="tab.label">
      <router-link
        :to="tab.to"
        :class="{ 'bg-success': currentPath === tab.to }"
        class="nav-link mx-2 bg-light-subtle text-white"
        >{{ tab.label }}</router-link
      >
    </li>
  </ul>
</template>
