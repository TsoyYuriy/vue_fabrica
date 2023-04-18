import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Favorite from "../pages/Favorite.vue";
import GalleryItem from "../pages/GalleryItem.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Main,
		},
		{
			path: "/favorite",
			component: Favorite,
		},
		{
			path: "/gallery/:id",
			component: GalleryItem,
			props: true,
		},
	],
});

export default router;
