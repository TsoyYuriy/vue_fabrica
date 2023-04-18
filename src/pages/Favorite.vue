<template>
	<div class="container">
		<div class="container-inner">
			<h1 class="favorite__title">Избранное</h1>
			<div class="gallery">
				<image-item 
					v-for="image in favorites"
					:image="image" 
					:key="image.id" 
				></image-item>
			</div>
		</div>
	</div>
</template>

<script>
import { favoriteStore } from '@/store/favoriteStore';
import {storeToRefs} from 'pinia'
import ImageItem from '../components/ImageItem.vue';
import { onMounted } from 'vue';

	export default {
		components: {
			ImageItem
		},

		setup() {
			const store = favoriteStore();
			const {favorites} = storeToRefs(store);
			const showSearch = () => {
				store.showSearch(true);
			}

			onMounted(showSearch)
			return {favorites}
		}
	}
</script>

<style scoped>
.favorite__title {
	text-align: center;
	font-weight: 700;
	font-size: 72px;
	line-height: 84px;
	text-align: center;
	color: #000000;
}

@media screen and (max-width: 900px) {
	.favorite__title {
		font-size: 36px;
	}
}
</style>