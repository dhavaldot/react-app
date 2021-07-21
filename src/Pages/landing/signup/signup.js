import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class signup extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			phone: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.singUp = this.singUp.bind(this);
	}

	handleChange(event) {
		console.log(`event.target::`, event.target);
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	singUp = (event) => {
		localStorage.setItem('user', JSON.stringify(this.state));
		this.props.history.push('/', this.state);
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<Form>
					<Form.Group widths="equal">
						<Form.Input
							fluid
							label="Email"
							placeholder="Email"
							onChange={this.handleChange}
							required
						/>
						<Form.Input
							fluid
							label="Phone No"
							placeholder="Mobile No"
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Input
							fluid
							label="Password"
							placeholder="Password"
							onChange={this.handleChange}
							required
						/>
						<Form.Input
							fluid
							label="Confirm Password"
							placeholder="Confirm Password"
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Button positive>Sign Up</Button>
					<Button
						onClick={() => {
							this.props.history.push('/');
						}}
						primary
					>
						Sign In ?
					</Button>
				</Form>
			</div>
		);
	}
}
