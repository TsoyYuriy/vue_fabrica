<template>
	<nav class="nav">
		<div class="container-inner nav__inner">
			<router-link to="/">
				<img src="/images/logo.svg" alt="Logo">
			</router-link>
	
			<ul class="menu">
				<li v-if="isSearch" class="menu__item search-icon">
					<router-link to="/"><span class="mobile">Поиск</span> </router-link>
				</li>
				<li class="menu__item favorite">
					<router-link to="/favorite"><span class="mobile">Избранное</span></router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { storeToRefs } from 'pinia';
import { favoriteStore } from '../store/favoriteStore';

	export default {

		setup () {
			const store = favoriteStore();
			const { isSearch } = storeToRefs(store)
			return {isSearch};
		}
		
	}
</script>

<style src="@/styles/header.css"></style>