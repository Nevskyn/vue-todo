import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TodoView from "@/views/TodoView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/todo",
    name: "todo",
    component: TodoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
