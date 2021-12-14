import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const navigate = useNavigate()
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [username, setUsername] = useState(null);
	const [favorites, setFavorites] = useState([]);
	const [favIds, setFavIds] = useState([]);


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
					setUsername(response.data.user.username)
					setFavorites(response.data.user.homes);
				});
		}
	};
	const handleLogout = () => {
		setToken(null);
		setUserId(null);
		setUsername(null)
		setFavorites([]);
		navigate("/");
	};

	useEffect(() => {
		let ids = favorites.map((favorite) => favorite.id);
		setFavIds(ids);
	}, [favorites]);


	const handleFavorites = (newFavId) => {
		let newArray = favIds;
		if (newArray.includes(newFavId)) {
			newArray.splice(newArray.indexOf(newFavId), 1);
		} else {
			newArray.push(newFavId);
		}
		//opdater sessionstorage...
		axios
			.put(
				"https://dinmaegler.herokuapp.com/users/" + userId,
				{
					homes: newArray,
				},
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			)
			.then((response) => setFavorites(response.data.homes));
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				userId,
				username,
				favorites,
				favIds,
				handleLogin,
				handleLogout,
				handleFavorites,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
