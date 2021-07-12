import React from 'react';
import { Link } from 'react-router-dom';
const ContactDetail = (props) => {
	const { contact } = props.location.state,
		{ name, email } = contact;
	return (
		<div className="main">
			<br />
			<br />
			<br />
			<br />
			<div className="ui card centered">
				<div className="content">
					<div className="header">{name}</div>
					<div className="description">{email}</div>
				</div>
			</div>
			<div className="center-div">
				<Link to="/">
					<button className="ui button blue center">
						Back to Contact List
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ContactDetail;
