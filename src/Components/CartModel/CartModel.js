import React from 'react';
import { Modal, Button, Image, Icon } from 'semantic-ui-react';

const CartModel = () => {
	const [open, setOpen] = React.useState(false);

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
					<p>
						This is an example of expanded content that will cause the modal's
						dimmer to scroll.
					</p>

					<Image
						src="/images/wireframe/paragraph.png"
						style={{ marginBottom: 10 }}
					/>
					<Image
						src="/images/wireframe/paragraph.png"
						style={{ marginBottom: 10 }}
					/>
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
