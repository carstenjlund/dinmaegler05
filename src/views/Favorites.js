import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "@reach/router";
import { UserContext } from "../contexts/UserContext";
import { Redirect } from "@reach/router";

const Favorites = () => {
	const { token, favorites } = useContext(UserContext);

	console.log("favoritespage", favorites);
	return token ? (
		<div className="widest centered">
			<Helmet>
				<title>Favoritter - Din Mægler</title>
			</Helmet>
			<h1>This is the favorites view</h1>

			{favorites.length ? (
				favorites.map((favorite) => <p>{favorite.id}</p>)
			) : (
				<p>
					Du har ingen favorit boliger lige nu! Du kan se udbuddet af boliger
					til salg <Link to="/homes">her</Link>{" "}
				</p>
			)}
		</div>
	) : (
		<Redirect to="/login" noThrow />
	);
};

export default Favorites;
