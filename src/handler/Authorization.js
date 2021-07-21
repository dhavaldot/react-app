import React from 'react';
import LocalKeys from '../Enums/localStorage';

const Authorization = () => {
	const user = localStorage.getItem(LocalKeys.USER);
	return !user ? false : true;
};

export default Authorization;
