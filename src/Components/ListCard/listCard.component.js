import React, { useState } from 'react';
import './listCard.css';
import { GridColumn, Card, Image, Button, Grid } from 'semantic-ui-react';

const ListCard = (props) => {
	const { _id, price, title, img_url } = props.item;
	let [itemCount, setItemCount] = useState(0);

	const orderCount = (condition) => {
		condition ? setItemCount(++itemCount) : setItemCount(--itemCount);
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
								<h5>{price}</h5>
							</GridColumn>
							<GridColumn>
								<Button.Group size="small">
									<Button
										size="mini"
										onClick={() => orderCount(false)}
										// onMouseMove={() => orderCount(false)}
										disabled={itemCount === 0}
									>
										-
									</Button>
									<Button.Or text={itemCount} />
									<Button
										size="mini"
										positive
										onClick={() => orderCount(true)}
										// onMouseMove={() => orderCount(true)}
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
