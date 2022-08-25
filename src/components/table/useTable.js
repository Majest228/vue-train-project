import { onMounted, reactive, ref } from 'vue'
import axios from 'axios'
export const useTable = () => {
	return { data: state.data }
}
