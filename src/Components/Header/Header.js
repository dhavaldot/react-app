import React from 'react';
import { Grid } from 'semantic-ui-react';
import './Header.css';
import CartModel from '../../Components/CartModel/CartModel';

const Header = () => {
	return (
		<div>
			<Grid columns={2}>
				<Grid.Column>
					<h3>
						Red Ginger
						<i className="angle down icon" />
					</h3>
				</Grid.Column>
				<Grid.Column textAlign="right">
					<CartModel />
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default Header;
