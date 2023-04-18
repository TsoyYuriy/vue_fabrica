import { defineStore } from "pinia";

export const favoriteStore = defineStore("favorite", {
	state: () => ({
		favorites: JSON.parse(localStorage.getItem("favorites")) || [],
		isSearch: false,
	}),

	actions: {
		addInFavorite(item) {
			const exists = this.favorites.some((f) => f.id === item.id);
			if (exists) return;
			this.favorites.push(item);
			localStorage.setItem("favorites", JSON.stringify(this.favorites));
		},

		showSearch(show) {
			this.isSearch = show;
		},
	},
});
