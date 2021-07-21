import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import React, { useState, useEffect } from 'react';
import ListPage from '../ListPage/listPage';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import apiCall from './apiCall';
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import LocalKeys from '../../Enums/localStorage';
import Authorization from '../../handler/Authorization';
import Login from '../landing/login/login';
import SignUp from '../landing/signup/signup';

//variable declaration
let selectedCategory = '';

function App() {
	const [category, setCatgories] = useState([]);
	const [items, setitems] = useState([]);
	const [storeId, setStoreId] = useState([]);

	// const storeId = '60864997457f68439788bacd';
	useEffect(() => {
		const storeID = localStorage.getItem(LocalKeys.STORE_ID);
		if (storeID) setStoreId(storeID);
	}, []);

	useEffect(() => {
		localStorage.setItem(LocalKeys.STORE_ID, '6098cc4f1e89fa3f8fccbfa4');
	}, [storeId]);

	const Auth = Authorization();
	console.log(`storeId::`, storeId);

	useEffect(() => {
		const retriveCategories = async () => {
			let url = `whiteLabel/categories/getCategories?storeId=${storeId}`;
			let categories = await apiCall.getAllCategoryByStoreId(url);
			let { data } = categories;
			if (data) setCatgories(data);
		};

		retriveCategories();
	}, [storeId]);

	const getItemsByCategory = async (categoryId) => {
		if (selectedCategory === categoryId) return;
		let url = `whiteLabel/item/getItems?storeId=${storeId}&category=${categoryId}`;
		let items = await apiCall.getAllCategoryByStoreId(url);
		let { data } = items;
		selectedCategory = categoryId;
		if (data) setitems(data);
	};

	return (
		<div>
			{Auth ? (
				<Container style={{ margin: 20, width: '100%' }}>
					<Grid columns={2}>
						<GridColumn width={3}>
							<Sidebar
								categories={category}
								onCategorySelect={getItemsByCategory}
							/>
						</GridColumn>
						<GridColumn width={13}>
							<Router>
								<Header />
								<Switch>
									<Route
										path="/"
										exact
										render={(props) => {
											Auth ? <ListPage {...props} items={items} /> : <Login />;
										}}
									/>
								</Switch>
							</Router>
						</GridColumn>
					</Grid>
				</Container>
			) : (
				<Container style={{ margin: 20, width: '100%' }}>
					<Grid columns={1}>
						<GridColumn width={16}>
							<Router>
								<Switch>
									<Route
										path="/"
										exact
										render={(props) => <Login history={props.history} />}
									/>
									<Route
										path="/signup"
										exact
										render={(props) => <SignUp history={props.history} />}
									/>
								</Switch>
							</Router>
						</GridColumn>
					</Grid>
				</Container>
			)}
		</div>
	);
}

export default App;
