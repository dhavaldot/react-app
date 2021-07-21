import React, { Component } from 'react';
import { Form, Button, Grid, GridColumn } from 'semantic-ui-react';
import API from './apiCall';
import LocalKeys from '../../../Enums/localStorage';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	login = async (event) => {
		event.preventDefault();
		const url = `whiteLabel/users/login`;

		const response = await API.login(url, this.state);

		if (response.status === 200) {
			const { email, data } = response.data;
			const user = {
				email,
			};

			localStorage.setItem(LocalKeys.USER, JSON.stringify(user));
			localStorage.setItem(LocalKeys.TOKEN, JSON.stringify(data.token));
			this.props.checkAuth();
			this.props.history.push('/');
		} else {
			alert(response.data.message);
		}
	};

	render() {
		return (
			<Grid columns={3} verticalAlign="middle">
				<GridColumn width={4}></GridColumn>
				<GridColumn width={8}>
					<Form>
						<Form.Input
							fluid
							label="Mobile No"
							name="user"
							placeholder="Mobile No"
							onChange={this.handleChange}
							width="4"
						/>
						<Form.Input
							fluid
							label="Password"
							name="password"
							placeholder="Password"
							onChange={this.handleChange}
							width="4"
						/>
						<Button onClick={this.login} positive>
							Submit
						</Button>
						<Button
							onClick={() => {
								this.props.history.push('/signup');
							}}
							primary
						>
							Sign Up ?
						</Button>
					</Form>
				</GridColumn>
				<GridColumn width={4}></GridColumn>
			</Grid>
		);
	}
}

export default Login;
