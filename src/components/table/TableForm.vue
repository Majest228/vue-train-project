<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '../../stores/store'
const {
	departure,
	travelTime,
	route,
	periodicity,
	arrivalTime,
	trainTag,
	isModal,
} = storeToRefs(useStore())
const { createTrain } = useStore()
</script>
<template>
	<button class="open" @click="isModal = !isModal">
		<p v-if="isModal">Закрыть форму</p>
		<p v-if="!isModal">Открыть форму</p>
	</button>
	<form v-if="isModal" class="form">
		<h3>Добавить новый рейс</h3>
		<input v-model="departure" type="text" placeholder="Отправление" />
		<input v-model="route" type="text" placeholder="Маршрут" />
		<input v-model="trainTag" type="text" placeholder="Поезд" />
		<input v-model="arrivalTime" type="text" placeholder="Время прибытия	" />
		<input v-model="travelTime" type="text" placeholder="Время в пути	" />
		<input v-model="periodicity" type="text" placeholder="Периодичность" />
		<button
			class="add"
			@click.prevent="
				createTrain(
					departure,
					route,
					trainTag,
					arrivalTime,
					travelTime,
					periodicity
				)
			"
		>
			Добавить
		</button>
	</form>
</template>
<style lang="scss">
.form {
	max-width: 500px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	h3 {
		text-align: center;
		font-size: 24px;
	}
	input {
		background: #ffffff;
		border: 1px solid rgba(144, 156, 181, 0.3);
		border-radius: 6px;
		margin: 10px;
		padding: 8px 10px;
	}
	.add {
		background: #f53b49;
		border-radius: 4px;
		padding: 12px 20px 13px;
		width: 143px;
		border: none;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		color: #ffffff;
		transition: all 1s;
		&:hover {
			border: #f53b49 solid 1px;
			background: #ffffff;
			color: #000000;
		}
	}
}
.open {
	background: #f53b49;
	border-radius: 4px;
	padding: 12px 20px 13px;
	width: 170px;
	border: none;
	display: flex;
	justify-content: center;
	margin: 20px;
	color: #ffffff;
	transition: all 1s;
	&:hover {
		border: #f53b49 solid 1px;
		background: #ffffff;
		color: #000000;
	}
}
</style>
