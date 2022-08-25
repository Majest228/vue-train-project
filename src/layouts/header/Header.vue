<script setup></script>

<template>
	<header class="header">
		<div class="container">
			<div class="content">
				<div class="content-logo">
					<RouterLink class="link-header" to="/">Логотип</RouterLink>
				</div>
				<div class="content-auth">
					<p>Войти</p>
				</div>
			</div>
		</div>
	</header>
	<RouterView />
</template>

<style lang="scss">
.header {
	background-color: rgb(32, 33, 35);
	color: #ffffff;
}
.container {
	max-width: 1120px;
	margin: 0 auto;
}

.content {
	padding: 20px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	&-logo {
		font-size: 24px;
	}
	&-auth {
		p {
			font-size: 18px;
		}
	}
}

.link-header {
	text-decoration: none;
	color: white;
}
</style>
