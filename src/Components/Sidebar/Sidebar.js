import React from 'react';
import { List, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const image = `data:image/webp;base64,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`;

let selectedItem = '';
const Sidebar = (props) => {
	let history = useHistory();

	const Logout = () => {
		console.log('logout');
		localStorage.clear();
		props.checkAuth();
		history.push('/');
	};

	const renderCategoryList = props.categories.map((category) => {
		return (
			<List.Item
				key={category.ref_id}
				active={category.ref_id === selectedItem}
				onClick={() => {
					selectedItem = category.ref_id;
					props.onCategorySelect(category.ref_id);
				}}
			>
				<Image avatar src={image} />
				<List.Content>
					<List.Header>{category.name}</List.Header>
				</List.Content>
			</List.Item>
		);
	});
	return (
		<div>
			<nav>
				<div>
					<h2>Sahl</h2>
				</div>

				<List selection verticalAlign="middle">
					{renderCategoryList}
				</List>
			</nav>
			<List selection verticalAlign="middle">
				<List.Item key="logout" onClick={() => Logout()}>
					<Image avatar src={image} />
					<List.Content>
						<List.Header>Logout</List.Header>
					</List.Content>
				</List.Item>
			</List>
		</div>
	);
};

export default Sidebar;
