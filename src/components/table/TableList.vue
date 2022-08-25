<template>
	<TableForm />
	<table class="table">
		<thead class="table-head">
			<tr class="table-head__items">
				<th class="table-head__items__item">Отправление</th>
				<th class="table-head__items__item">Маршрут</th>
				<th class="table-head__items__item">Поезд</th>
				<th class="table-head__items__item">Время прибытия</th>
				<th class="table-head__items__item">Время в пути</th>
				<th class="table-head__items__item">Периодичность</th>
				<th class="table-head__items__item"></th>
				<th class="table-head__items__item"></th>
			</tr>
		</thead>
		<tbody class="table-body">
			<TableItem />
		</tbody>
	</table>
</template>

<script setup>
import TableItem from './TableItem.vue'
import TableForm from './TableForm.vue'
</script>

<style lang="scss">
.table {
	text-align: center;
	min-width: 1024px;
	width: 100%;
	margin-top: 30px;
	margin-bottom: 20px;
	border-collapse: collapse;
	background: #ffffff;
}
.table th {
	font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd;
}
.table td {
	border: 1px solid #dddddd;
	padding: 5px;
}
.table tr td:first-child,
.table tr th:first-child {
	border-left: none;
}
.table tr td:last-child,
.table tr th:last-child {
	border-right: none;
}

.table-button {
	cursor: pointer;
	border: none;
	padding: 5px;
	background: none;
	color: red;
	transition: all 1.2s;
	&:hover {
		color: #000000;
	}
}
</style>
