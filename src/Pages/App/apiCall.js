import axios from 'axios';
const BASE_URL = 'http://localhost:3000/api/v1';

const getAllCategoryByStoreId = async (url) => {
	let response = await axios.get(`${BASE_URL}/${url}`, {
		withCredentials: true,
	});
	const { data } = response;
	return data;
};

const getAllItemsByCategory = async (url) => {
	let response = await axios.get(`${BASE_URL}/${url}`, {
		withCredentials: true,
	});
	const { data } = response;
	return data;
};

const cartCheckout = async (url, payload) => {
	return axios
		.post(`${BASE_URL}/${url}`, payload, { withCredentials: true })
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err.response;
		});
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getAllCategoryByStoreId,
	getAllItemsByCategory,
	cartCheckout,
};
