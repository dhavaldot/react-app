import React, { useEffect, useState } from 'react';

const Sidebar = (props) => {
	// let selectedCategory = '';

	const renderCategoryList = props.categories.map((category) => {
		return (
			<li key={category.ref_id}>
				<button
					className="btn btn-outline-dark"
					onClick={() => {
						props.onCategorySelect(category.ref_id);
					}}
				>
					{category.name}
				</button>
			</li>
		);
	});
	return (
		<div>
			<nav>
				<div>
					<h3>Sahl</h3>
				</div>

				<ul>{renderCategoryList}</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
