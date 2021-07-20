import axios from 'axios';
const BASE_URL = 'http://localhost:3000/api/v1';

const getAllCategoryByStoreId = async (url) => {
	let response = await axios.get(`${BASE_URL}/${url}`);
	const { data } = response;
	return data;
};

const getAllItemsByCategory = async (url) => {
	let response = await axios.get(`${BASE_URL}/${url}`);
	const { data } = response;
	return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getAllCategoryByStoreId,
	getAllItemsByCategory,
};
