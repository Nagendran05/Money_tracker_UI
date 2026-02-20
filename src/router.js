import { createRouter, createWebHistory } from "vue-router";

import Login from "./components/LoginPage.vue";
import Dashboard from "./components/Dashboard.vue";
import RegisterPage from "./components/RegisterPage.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/dashboard", component: Dashboard },
  { path: "/register", component: RegisterPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
