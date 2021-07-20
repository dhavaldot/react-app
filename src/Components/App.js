import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {
	const LOCAL_STORAGE_KEY = 'contacts';
	const [contacts, setContacts] = useState([]);

	const addContactHandler = (contact) => {
		setContacts([...contacts, { id: uuid(), ...contact }]);
	};

	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});

		setContacts(newContactList);
	};

	useEffect(() => {
		const retriveContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (retriveContacts) setContacts(JSON.parse(retriveContacts));
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<div className="ui container">
			<Router>
				<Header />
				<Switch>
					<Route
						path="/"
						exact
						render={(props) => (
							<ContactList
								{...props}
								contacts={contacts}
								getContactId={removeContactHandler}
							/>
						)}
					/>
					<Route
						path="/add"
						render={(props) => (
							<AddContact {...props} addContactHandler={addContactHandler} />
						)}
					/>
					<Route path="/contact/:id" component={ContactDetail} />
				</Switch>

				{/* <AddContact addContactHandler={addContactHandler} />
				<ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
			</Router>
		</div>
	);
}

export default App;
