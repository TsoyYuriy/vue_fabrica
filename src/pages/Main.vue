
<template>
	<div class="container">

		<div class="search-block">
			<input class="input-search" type="text" v-model="searchInput" placeholder="Поиск">
		</div>

		<div class="container-inner">
			<h1 class="load" v-if="isLoading">Loading...</h1>

			<div class="gallery" v-else>
				<image-item 
					v-for="image in gallery"
					:image="image" 
					:key="image.id" 
					@click="$router.push(`/gallery/${image.id}`)"
				></image-item>
			</div>
		</div>

	</div>
</template>

<script>
import {onMounted, ref, watch} from 'vue';
import ImageItem from '@/components/ImageItem.vue';
import { baseInstance} from '@/api/instance';
import {API_KEY} from '@/api/baseApi';
import { debounce } from 'lodash'; 
import { favoriteStore } from '../store/favoriteStore';

	export default {
		components: {
			ImageItem
		},

		setup() {
			const searchInput = ref('');
			const gallery = ref([]);
			const store = favoriteStore();
			const isLoading = ref(false);


			const getImages = async() => {
				try {
					isLoading.value = true;
					const resp = await baseInstance.get(`photos/random/?count=8&query=art&client_id=${API_KEY}`);
					gallery.value = await resp.data;
				} catch (err) {
					console.log(err.message);
				} finally {
					isLoading.value = false;
				}
			};


			const search = debounce( async () => {
				try {

					if (searchInput.value.length <= 0) {
						getImages();
						return;
					}
					const resp = await baseInstance.get(`search/photos?query=${searchInput.value}&client_id=${API_KEY}`);
					gallery.value = await resp.data.results;
				} catch (err) {
					console.log(err);
				}
			}, 500)

			const showSearch = () => {
				store.showSearch(false);
			}
		
			watch(searchInput, search);

			onMounted(() => {
				getImages();
				showSearch()
			});

			return {searchInput, gallery, isLoading};
		}
		
	}
</script>

<style src="@/styles/main.css"></style>
