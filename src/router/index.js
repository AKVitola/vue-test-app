import { createRouter, createWebHistory } from "vue-router";

import FirstPage from "../components/FirstPage.vue";
import SecondPage from "../components/SecondPage.vue";
import FinalPage from "../components/FinalPage.vue";

const routes = [
    { path: "/", name: "firstPage", component: FirstPage },
    { path: "/2", name: "secondPage", component: SecondPage },
    { path: "/3", name: "finalPage", component: FinalPage }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;