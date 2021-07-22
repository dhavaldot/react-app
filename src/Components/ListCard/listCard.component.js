import React, { useState, useEffect } from 'react';
import './listCard.css';
import { GridColumn, Card, Image, Button, Grid } from 'semantic-ui-react';
import LocalKeys from '../../Enums/localStorage';

const checkCount = (_id) => {
	let cartItems = JSON.parse(localStorage.getItem(LocalKeys.CART_ITEMS));

	let inCart =
		cartItems && cartItems.length > 0
			? cartItems.filter(({ itemId }) => itemId === _id)
			: [];
	return inCart && inCart.length > 0 ? inCart[0].quantity : 0;
};

const ListCard = (props) => {
	const { _id, price, title, img_url } = props.item;
	let [itemCount, setItemCount] = useState(checkCount(_id));

	const orderCount = (item, condition) => {
		let Count = props.addRemoveItems(item, condition);
		setItemCount(Count);
	};

	return (
		<GridColumn>
			<Card key={_id} style={{ margin: 30 }}>
				<Image src={img_url} rounded={true} className="img" centered />
				<Card.Content>
					<Card.Description>
						<h5>
							<b>{title}</b>
						</h5>
					</Card.Description>
					<br />
					<Card.Description>
						<Grid columns={2} verticalAlign="middle">
							<GridColumn>
								<h5>₹{price}</h5>
							</GridColumn>
							<GridColumn>
								<Button.Group size="small">
									<Button
										size="mini"
										onClick={() => orderCount(props.item, false)}
										disabled={itemCount === 0}
									>
										-
									</Button>
									<Button.Or text={itemCount} />
									<Button
										size="mini"
										positive
										onClick={() => orderCount(props.item, true)}
									>
										+
									</Button>
								</Button.Group>
							</GridColumn>
						</Grid>
					</Card.Description>
				</Card.Content>
			</Card>
		</GridColumn>
	);
};

export default ListCard;
