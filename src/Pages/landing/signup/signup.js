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
					<Button>Sign Up</Button>
					<Button
						onClick={() => {
							this.props.history.push('/');
						}}
					>
						Sign In ?
					</Button>
				</Form>
				{/* <form onSubmit={this.singUp}>
					<h3>Sign Up</h3>

					<div className="form-group">
						<label>First name</label>
						<input
							name="firstname"
							value={this.state.firstname}
							onChange={this.handleChange}
							type="text"
							className="form-control"
							placeholder="First name"
							required
						/>
					</div>

					<div className="form-group">
						<label>Last name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Last name"
							name="lastname"
							value={this.state.lastname}
							onChange={this.handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label>Email address</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="enter password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
					</div>

					<input
						type="submit"
						className="btn btn-primary btn-block"
						value="Submit"
					/>
					<p>
						Already registered <a href="#">Sign in?</a>
					</p>
				</form> */}
			</div>
		);
	}
}
