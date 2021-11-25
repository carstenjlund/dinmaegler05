import { Helmet } from "react-helmet-async";
import { Link } from "@reach/router";
import { Redirect } from "@reach/router";
import HeadlineRibbon from "../components/HeadlineRibbon";
import FavoriteCard from "../components/FavoriteCard";
import useAuth from "../customHooks/useAuth"

const Favorites = () => {
	const auth = useAuth();

	console.log("favoritespage", auth.favorites);
	return auth.token ? (
		<>
			<Helmet>
				<title>Favoritter - Din Mægler</title>
			</Helmet>
			<HeadlineRibbon headline="Mine favoritboliger" />
		<div className="widest centered">
			<h1>This is the favorites view</h1>

			{auth.favorites.length ? (
				auth.favorites.map((favorite) => <FavoriteCard data={favorite} />)
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
