import React from 'react';
import './listCard.css';

const listCard = (props) => {
	const { _id, price, title, img_url } = props.item;
	return (
		<div className="col-3 mt40 justify-content-center" key={_id}>
			<img src={img_url} className="img" alt="item" />
			<label>{title}</label>
			<h5>{price}</h5>
		</div>
	);
};

export default listCard;
