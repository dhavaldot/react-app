import React from 'react';
import ListCard from '../../Components/ListCard/listCard.component';
import './listPage.css';
import { Grid } from 'semantic-ui-react';
import LocalKeys from '../../Enums/localStorage';

const listPage = (props) => {
	const addRemoveItems = (item, isAdd) => {
		let cartItems = JSON.parse(localStorage.getItem(LocalKeys.CART_ITEMS));
		let checkItemData = cartItems ? cartItems && cartItems.length > 0 : false;
		let { _id, price, title } = item;

		if (checkItemData) {
			let checkExitingItem = cartItems.some((ele) => ele.itemId === _id);

			if (checkExitingItem) {
				let objIndex = cartItems.findIndex((obj) => obj.itemId === _id);
				cartItems[objIndex].quantity = isAdd
					? ++cartItems[objIndex].quantity
					: --cartItems[objIndex].quantity;

				if (cartItems[objIndex].quantity === 0) {
					cartItems = cartItems.filter(({ itemId }) => itemId !== _id);
				}
			} else {
				cartItems.push({
					itemId: _id,
					title,
					quantity: 1,
					price,
					addOns: [],
				});
			}

			localStorage.setItem(LocalKeys.CART_ITEMS, JSON.stringify(cartItems));
		} else {
			const items = [
				{
					itemId: _id,
					title,
					quantity: 1,
					price,
					addOns: [],
				},
			];
			localStorage.setItem(LocalKeys.CART_ITEMS, JSON.stringify(items));
		}

		return checkCount(_id);
	};

	const checkCount = (_id) => {
		let cartItems = JSON.parse(localStorage.getItem(LocalKeys.CART_ITEMS));

		let inCart =
			cartItems && cartItems.length > 0
				? cartItems.filter(({ itemId }) => itemId === _id)
				: [];
		return inCart && inCart.length > 0 ? inCart[0].quantity : 0;
	};

	const renderItems = props.items.map((item) => {
		return (
			<ListCard
				item={item}
				addRemoveItems={addRemoveItems}
				key={item._id}
			></ListCard>
		);
	});
	return (
		<Grid columns={3}>
			<Grid.Row>{renderItems}</Grid.Row>
		</Grid>
	);
};

export default listPage;
