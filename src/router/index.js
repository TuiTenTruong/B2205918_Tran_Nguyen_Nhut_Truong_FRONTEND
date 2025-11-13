import { createRouter, createWebHistory } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routers = [
	{
		path: "/",
		name: "contactbook",
		component: ContactBook,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: () => import("@/views/NotFound.vue"),
	},
	{
		path: "/contacts/:id",
		name: "contact.edit",
		component: () => import("@/views/ContactEdit.vue"),
		props: true,
	},
	{
		path: "/contacts/add",
		name: "contact.add",
		component: () => import("@/views/ContactCreate.vue"),
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routers,
});

export default router;
