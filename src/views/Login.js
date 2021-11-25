import { Helmet } from "react-helmet-async";
import { Redirect } from "@reach/router";
import HeadlineRibbon from "../components/HeadlineRibbon";
import useAuth from "../customHooks/useAuth"

const Login = () => {
	const auth = useAuth()

	const handleSubmit = (e) => {
		e.preventDefault();
		auth.handleLogin(e.target.username.value, e.target.password.value);
	};
	return !auth.token ? (
		<>
				<Helmet>
					<title>Log ind - Din Mægler</title>
				</Helmet>
				<HeadlineRibbon headline="Log ind" />
			<div className="wide centered">
				<h1>This is the login view</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
					<button type="submit">Log ind</button>
				</form>
			</div>
		</>
	) : (
		<Redirect to="/favorites" noThrow />
	);
};

export default Login;
