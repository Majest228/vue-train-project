<template>
	<div class="card">
		<div class="card-content">
			<h3>Отправление:</h3>
			<input
				v-bind:value="train.departure"
				v-on:input="train.departure = $event.target.value"
			/>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<h3>Маршрут:</h3>
			<input
				v-bind:value="train.route"
				v-on:input="train.route = $event.target.value"
			/>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<h3>Поезд:</h3>
			<input
				v-bind:value="train.trainTag"
				v-on:input="train.trainTag = $event.target.value"
			/>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<h3>Время прибытия:</h3>
			<input
				v-bind:value="train.arrivalTime"
				v-on:input="train.arrivalTime = $event.target.value"
			/>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<h3>Время в пути:</h3>
			<input
				v-bind:value="train.travelTime"
				v-on:input="train.travelTime = $event.target.value"
			/>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			<h3>Периодичность:</h3>
			<input
				v-bind:value="train.periodicity"
				v-on:input="train.periodicity = $event.target.value"
			/>
		</div>
	</div>
	<button
		@click.prevent="
			updateTrain(
				train.departure,
				train.route,
				train.trainTag,
				train.arrivalTime,
				train.travelTime,
				train.periodicity,
				train.id
			),
				$router.push('/')
		"
		class="button"
	>
		Сохранить изменения
	</button>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '../stores/store'
const { updateTrain } = useStore()
const {
	train,
	departure,
	travelTime,
	route,
	periodicity,
	arrivalTime,
	trainTag,
} = storeToRefs(useStore())
const { getById } = useStore()
const router = useRoute()
const trainId = parseInt(router.params.id)
getById(trainId)
</script>
<style scoped lang="scss">
.card {
	border-radius: 12px;
	background-color: #ffffff;
	max-width: 500px;
	margin: 10px auto 10px;
	max-height: 350px;
	&-content {
		display: flex;
		align-items: center;

		padding: 20px 20px;
		h3 {
			font-size: 24px;
			display: block;
		}
		input {
			border: none;
			color: #000000;
			margin-left: 10px;
			margin-top: 3px;

			font-size: 16px;
		}
	}
}

button {
	background: #f53b49;
	border-radius: 4px;
	padding: 12px 20px 13px;
	width: 200px;
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
.button {
}
</style>
