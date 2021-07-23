import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import APICall from './apiCall';

export default class signup extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.singUp = this.singUp.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	singUp = async (event) => {
		const { password, confirmPassword, email, phone } = this.state;
		if (!password || !confirmPassword || !email || !phone)
			return alert('All field are required!');
		if (password !== confirmPassword) return alert('Password must be same!');

		const url = 'whiteLabel/users/signup';
		const response = await APICall.register(url, this.state);

		this.setState({
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
		});

		if (response.status === 200) {
			const { message } = response.data;
			alert(message);
		} else {
			alert(response.data.message);
		}
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
							name="email"
							content={this.state.email}
							placeholder="Email"
							onChange={this.handleChange}
							required
						/>
						<Form.Input
							fluid
							label="Phone No"
							name="phone"
							content={this.state.phone}
							placeholder="Mobile No"
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Input
							fluid
							label="Password"
							name="password"
							content={this.state.password}
							placeholder="Password"
							onChange={this.handleChange}
							required
						/>
						<Form.Input
							fluid
							label="Confirm Password"
							name="confirmPassword"
							content={this.state.confirmPassword}
							placeholder="Confirm Password"
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Button onClick={this.singUp} positive>
						Sign Up
					</Button>
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
