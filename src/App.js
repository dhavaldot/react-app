import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './landing/login/login';
import SignUp from './landing/signup/signup';
import Home from './landing/home';

function App() {
	return (
		<Router>
			<div className="App">
				<nav className="navbar navbar-expand-lg navbar-light fixed-top">
					<div className="container">
						<Link className="navbar-brand" to={'/sign-in'}>
							React-Web
						</Link>
						<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to={'/sign-in'}>
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={'/sign-up'}>
										Sign up
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div className="auth-wrapper">
					<div className="auth-inner">
						<Switch>
							<Route exact path="/" component={Login} />
							<Route exact path="/sign-in" component={Login} />
							<Route exact path="/sign-up" component={SignUp} />
							<Route exact path="/home" component={Home} />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
