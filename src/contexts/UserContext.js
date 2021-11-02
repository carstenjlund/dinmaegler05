import { createContext, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

	const handleLogin = (username, password) => {
		if (username && password) {
			axios
				.post("https://dinmaegler.herokuapp.com/auth/local", {
					identifier: username,
					password: password,
				})
				.then((response) => {
					setToken(response.data.jwt);
					setUserId(response.data.user.id);
				});
		}
	};
	const handleLogout = () => {
		setToken(null);
		setUserId(null);
		navigate("/");
	};

	return (
		<UserContext.Provider value={{ token, userId, handleLogin, handleLogout }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
