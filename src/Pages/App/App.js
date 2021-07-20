import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import React, { useState, useEffect } from 'react';
import ListPage from '../ListPage/listPage';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import apiCall from './apiCall';
import { Container, Grid, GridColumn } from 'semantic-ui-react';

let selectedCategory = '';
function App() {
	const [category, setCatgories] = useState([]);
	const [items, setitems] = useState([]);

	// const storeId = '60864997457f68439788bacd';
	const storeId = '6098cc4f1e89fa3f8fccbfa4';
	console.log('app');
	useEffect(() => {
		const retriveCategories = async () => {
			let url = `whiteLabel/categories/getCategories?storeId=${storeId}`;
			let categories = await apiCall.getAllCategoryByStoreId(url);
			let { data } = categories;
			if (data) setCatgories(data);
		};

		retriveCategories();
	}, []);

	const getItemsByCategory = async (categoryId) => {
		console.log(`condition ::`, selectedCategory === categoryId);
		console.log(`selectedCategory ::`, selectedCategory);
		console.log(`categoryId ::`, categoryId);
		if (selectedCategory === categoryId) return;
		let url = `whiteLabel/item/getItems?storeId=${storeId}&category=${categoryId}`;
		let items = await apiCall.getAllCategoryByStoreId(url);
		let { data } = items;
		selectedCategory = categoryId;
		console.log(`selectedCategory assign`, selectedCategory);
		if (data) setitems(data);
	};

	return (
		<div>
			<Container style={{ margin: 20, width: '100%' }}>
				<Grid columns={7}>
					<GridColumn>
						<Sidebar
							categories={category}
							onCategorySelect={getItemsByCategory}
						/>
					</GridColumn>
					<GridColumn>
						<Router>
							<Header />
							<Switch>
								<Route
									path="/"
									exact
									render={(props) => <ListPage {...props} items={items} />}
								/>
							</Switch>
						</Router>
					</GridColumn>
				</Grid>
			</Container>
		</div>

		/* <div className="wrapper">
			<div className="sidebar">
				<Sidebar categories={category} onCategorySelect={getItemsByCategory} />
			</div>
			<div className="content">
				<Router>
					<Header />
					<Switch>
						<Route
							path="/"
							exact
							render={(props) => <ListPage {...props} items={items} />}
						/>
					</Switch>
				</Router>
			</div>
		</div> */
	);
}

export default App;
