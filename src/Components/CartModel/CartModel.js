import React from 'react';
import { Modal, Button, Icon, Grid, GridColumn, List } from 'semantic-ui-react';
import LocalKeys from '../../Enums/localStorage';
import CONSTANT from '../../Enums/constant';
import APICall from '../../Pages/App/apiCall';

const CartModel = () => {
	const [open, setOpen] = React.useState(false);

	const cartItems = JSON.parse(localStorage.getItem(LocalKeys.CART_ITEMS));

	const checkout = async () => {
		const cartItems = JSON.parse(localStorage.getItem(LocalKeys.CART_ITEMS));

		const payload = {
			couponCode: CONSTANT.couponCode,
			storeId: CONSTANT.storeId,
			items: cartItems,
		};

		const url = `whiteLabel/cart/addToCart`;
		const response = await APICall.cartCheckout(url, payload);
		console.log(`response::`, response);
	};

	const renderCartItems =
		cartItems && cartItems?.length > 0 ? (
			cartItems.map(({ itemId, title, quantity, price }) => {
				return (
					<List.Item key={itemId}>
						<List.Content>
							<Grid columns={2} padded>
								<GridColumn width={12}>{title}</GridColumn>
								<GridColumn width={4} key={itemId}>
									{price} * {quantity} = ₹{Number(price) * quantity}
								</GridColumn>
							</Grid>
						</List.Content>
					</List.Item>
				);
			})
		) : (
			<p>No data available</p>
		);
	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			trigger={
				<Button circular color="teal" icon="cart" size="big" basic primary />
			}
			size="small"
			style={{ height: 'unset', left: 'unset', top: 'unset' }}
		>
			<Modal.Header>Your Cart</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<List verticalAlign="middle">{renderCartItems}</List>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button
					disabled={cartItems && cartItems?.length > 0 ? false : true}
					onClick={() => {
						setOpen(false);
						checkout();
					}}
					primary
				>
					Checkout <Icon name="chevron right" />
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default CartModel;
