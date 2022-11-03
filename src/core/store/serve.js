
import axios from 'axios'

export default class ProductService {
    getProductsSmall() {
		return axios.get('https://dummyjson.com/products')
		.then(res => res.data)
	}
	searchproduct(e) {
		return axios.get(`https://dummyjson.com/products/search?q=${e}`)
		.then(res => res.data)
	}
}

