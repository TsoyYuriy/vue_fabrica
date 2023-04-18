<script>
export default {
	props: {
		image: {
			type: Object
		}
	}
}
</script>

<template>
	<div class="gallery-item">
		<img class="img" :src="image.urls?.regular" alt="">
	</div>
</template>

<style scoped>
.gallery-item {
  flex-basis: calc(33.33% - 10px);
  position: relative;
  overflow: hidden;
  padding-bottom: 100%;
	border-radius: 5px;
	
}

.gallery-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>