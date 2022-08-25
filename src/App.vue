<script setup>
import { RouterView, RouterLink } from 'vue-router'
import HomeView from './views/HomeView.vue'
import Header from './layouts/header/Header.vue'
</script>

<template>
	<Header />
	<div class="container"></div>
</template>

<style scoped lang="scss">
.container {
	max-width: 1410px;
	margin: 0 auto;
}

.nav {
	&-list {
		display: flex;
		justify-content: center;
		&__link {
			padding-right: 30px;
			text-decoration: none;
			color: #000000;
			font-size: 24px;
			transition: all 1s;
			&:hover {
				color: red;
			}
		}
	}
}
</style>
