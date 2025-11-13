import { createRouter, createWebHistory } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routers = [
	{
		path: "/",
		name: "contactbook",
		component: ContactBook,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routers,
});

export default router;
