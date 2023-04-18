
<template>
	<div class="container imageInfo">	
		<div class="container-inner imageInfo__content">

			<div class="imageInfo__header">
				<div class="imageInfo__header-info">
					<div class="user-avatar">
						<img :src="info.user?.profile_image.small" alt="User Avatar">
					</div>
					<div class="user-name__wrap">
						<p class="user-name">{{ info.user?.name }}</p>
						<a class="user-instagram" href="#">@{{ info.user?.instagram_username }}</a>
					</div>
				</div>

				<div class="imageInfo__header-nav">
					<button class="btn-favorite" @click="addInFav(info)"></button>
					<button class="btn-download"> <span class="mobile">Downloand</span></button>
				</div>
			</div>

			<div class="imageView">
				<img :src="info.urls?.regular" alt="">
			</div>

		</div>


	</div>
</template>

<script>
import {onMounted, ref} from 'vue';
import { favoriteStore } from '@/store/favoriteStore'
import { baseInstance } from '@/api/instance';
import { API_KEY } from '@/api/baseApi';

export default {
	props: {
		id: {
			type: String,
			required: true
		}
	},

	setup (props) {
		const info = ref({});
		const store = favoriteStore();

		const getInfo = async() => {
			try {
				const resp = await baseInstance.get(`photos/${props.id}?client_id=${API_KEY}`);
				info.value = await resp.data;
			} catch (err) {
				console.log(err);
			}
		};

		const addInFav = (item) => {
			store.addInFavorite(item);
		}

		const showSearch = () => {
			store.showSearch(true);
		}

		onMounted(() => {
			getInfo()
			showSearch()
		})
	
		return {info, addInFav}
	}
}
</script>

<style src="@/styles/imageInfo.css"></style>

