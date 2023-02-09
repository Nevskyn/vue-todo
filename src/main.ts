import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import App from "@/App.vue";
import router from "@/router";
import { FIREBASE_CONFIG } from "@/configs/firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const pinia = createPinia();

initializeApp(FIREBASE_CONFIG);

export const firestore = getFirestore();

createApp(App).use(pinia).use(router).mount("#app");
