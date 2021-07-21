import React, { Component } from 'react';
import { Form, Button, Grid, GridColumn } from 'semantic-ui-react';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			phone: '',
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

	login = (event) => {
		event.preventDefault();
		// this.props.history.push('/home');
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
							name="phone"
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
