import React from 'react';
import ListCard from '../../Components/ListCard/listCard.component';
import './listPage.css';

const listPage = (props) => {
	const renderItems = props.items.map((item) => {
		return <ListCard item={item} key={item._id}></ListCard>;
	});
	return <div className="row">{renderItems}</div>;
};

export default listPage;
