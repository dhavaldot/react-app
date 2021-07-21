import React from 'react';
import ListCard from '../../Components/ListCard/listCard.component';
import './listPage.css';
import { Grid } from 'semantic-ui-react';

const listPage = (props) => {
	const renderItems = props.items.map((item) => {
		return <ListCard item={item} key={item._id}></ListCard>;
	});
	return (
		<Grid columns={3}>
			<Grid.Row>{renderItems}</Grid.Row>
		</Grid>
	);
};

export default listPage;
