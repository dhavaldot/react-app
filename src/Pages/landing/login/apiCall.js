import axios from 'axios';
const BASE_URL = 'http://localhost:3000/api/v1';

const login = async (url, payload) => {
	return axios
		.post(`${BASE_URL}/${url}`, payload)
		.then((response) => {
			return response;
		})
		.catch((err) => {
			return err.response;
		});
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	login,
};
