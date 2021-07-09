import React, { Component } from 'react';

class Home extends Component {
	userdata = {};
	constructor() {
		super();
		this.userdata = JSON.parse(localStorage.getItem('user'));
	}

	render() {
		return (
			<div>
				<h1>
					Hello{' '}
					{this.userdata.firstname
						? this.userdata.firstname
						: this.userdata.email}
				</h1>
			</div>
		);
	}
}

export default Home;
