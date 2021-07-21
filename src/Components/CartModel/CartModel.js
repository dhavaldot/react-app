import React from 'react';
import { Modal, Button, Icon, Grid, GridColumn, List } from 'semantic-ui-react';
import LocalKeys from '../../Enums/localStorage';

const CartModel = () => {
	const [open, setOpen] = React.useState(false);

	const cartItems = JSON.parse(localStorage.getItem(LocalKeys.CART_ITEMS));

	const renderCartItems =
		cartItems && cartItems?.length > 0 ? (
			cartItems.map(({ itemId, title, quantity, price }) => {
				return (
					<List.Item key={itemId}>
						<List.Content>
							<Grid columns={2}>
								<GridColumn width={12}>{title}</GridColumn>
								<GridColumn width={4} key={itemId}>
									{price} * {quantity} = {Number(price) * quantity}
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
				<Button
					circular
					color="teal"
					icon="cart"
					size="big"
					basic={true}
					primary
				/>
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
				<Button onClick={() => setOpen(false)} primary>
					Checkout <Icon name="chevron right" />
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default CartModel;
