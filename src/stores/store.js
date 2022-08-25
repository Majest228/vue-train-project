import { defineStore } from 'pinia'
// import uniqid from 'uniqid'
import axios from 'axios'
import { useRoute } from 'vue-router'
const router = useRoute()
export const useStore = defineStore({
	id: 'store',
	state: () => ({
		trains: [],
		loading: false,
		error: null,
		departure: '',
		route: '',
		trainTag: '',
		arrivalTime: '',
		travelTime: '',
		periodicity: '',
		train: null,
		isModal: false,
	}),
	getters: {},
	actions: {
		async getAllTrains() {
			this.loading = true
			try {
				this.trains = await axios
					.get('http://localhost:3002/trains')
					.then(res => (this.trains = res.data))
			} catch (error) {
				this.error = error
			} finally {
				this.loading = false
			}
		},
		async getById(id) {
			this.train = null
			try {
				this.train = await axios
					.get(`http://localhost:3002/trains/${id}`)
					.then(res => (this.train = res.data))
			} catch (error) {}
		},
		async removeTrain(id) {
			await axios.delete('http://localhost:3002/trains/' + id)
			this.trains = this.trains.filter(t => t.id != id)
		},

		async createTrain(
			departure,
			route,
			trainTag,
			arrivalTime,
			travelTime,
			periodicity
		) {
			const newTrain = {
				id: Math.floor(Math.random() * 1000),
				departure,
				route,
				trainTag,
				arrivalTime,
				travelTime,
				periodicity,
			}
			this.trains.push(newTrain)
			await axios
				.post('http://localhost:3002/trains', newTrain)
				.then(res => console.log(res))
			Vue.forceUpdate()
		},
		async updateTrain(
			departure,
			route,
			trainTag,
			arrivalTime,
			travelTime,
			periodicity,
			id
		) {
			const newTrain = {
				id,
				departure,
				route,
				trainTag,
				arrivalTime,
				travelTime,
				periodicity,
			}

			console.log(newTrain)
			await axios.put(`http://localhost:3002/trains/${id}`, newTrain)
			Vue.forceUpdate()
		},
		trainId(routerId) {
			return (this.train = this.trains.find(t => t.id === routerId))
		},
	},
})
