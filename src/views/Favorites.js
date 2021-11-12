import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@reach/router";
import { UserContext } from "../contexts/UserContext";
import { Redirect } from "@reach/router";
import HeadlineRibbon from "../components/HeadlineRibbon";
import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
	const { token, favorites } = useContext(UserContext);


	console.log("favoritespage", favorites);
	return token ? (
		<>
			<Helmet>
				<title>Favoritter - Din Mægler</title>
			</Helmet>
			<HeadlineRibbon headline="Mine favoritboliger" />
		<div className="widest centered">
			<h1>This is the favorites view</h1>

			{favorites.length ? (
				favorites.map((favorite) => <FavoriteCard data={favorite} />)
			) : (
				<p>
					Du har ingen favorit boliger lige nu! Du kan se udbuddet af boliger
					til salg <Link to="/homes">her</Link>{" "}
				</p>
			)}
		</div>
		</>
	) : (
		<Redirect to="/login" noThrow />
	);
};

export default Favorites;
