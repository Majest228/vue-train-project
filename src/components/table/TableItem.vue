<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '../../stores/store'
const { trains } = storeToRefs(useStore())
const { getAllTrains, removeTrain, deleteItem } = useStore()
getAllTrains()
</script>

<template>
	<tr class="table-body__items" v-for="train in trains">
		<td class="table-body__items__item">{{ train.departure }}</td>
		<td class="table-body__items__item">{{ train.route }}</td>
		<td class="table-body__items__item">{{ train.trainTag }}</td>
		<td class="table-body__items__item">{{ train.arrivalTime }}</td>
		<td class="table-body__items__item">{{ train.travelTime }}</td>
		<td class="table-body__items__item">{{ train.periodicity }}</td>
		<td>
			<button @click="removeTrain(train.id)" class="table-button">X</button>
		</td>
		<td>
			<RouterLink
				class="link"
				:to="{ name: 'trains', params: { id: train.id } }"
				>Изменить</RouterLink
			>
		</td>
	</tr>
	<RouterView />
</template>

<style>
.link {
	text-decoration: none;
	color: #000000;
	transition: all 1s;
}
.link:hover {
	color: red;
}
</style>
