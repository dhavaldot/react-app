import React, { Component } from 'react';

export default class signup extends Component {
	constructor() {
		super();

		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.singUp = this.singUp.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	singUp = (event) => {
		localStorage.setItem('user', JSON.stringify(this.state));
		this.redirect = true;
		this.props.history.push('/home', this.state);
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.singUp}>
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
				</form>
			</div>
		);
	}
}
