<script>
import MyHeader from '@/components/MyHeader.vue'

export default {
	components: {
		MyHeader
	}
}
</script>

<template>
	<div class="app">
		<div class="container">
			<my-header></my-header>
			<router-view></router-view>
		</div>
	</div>
</template>

<style src="./style.css"></style>
