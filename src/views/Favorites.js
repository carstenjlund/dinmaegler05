import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import HeadlineRibbon from "../components/HeadlineRibbon";
import FavoriteCard from "../components/FavoriteCard";
import useAuth from "../customHooks/useAuth"

const Favorites = () => {
	const auth = useAuth();

	return auth.token ? (
		<>
			<Helmet>
				<title>Favoritter - Din Mægler</title>
			</Helmet>
			<HeadlineRibbon headline="Mine favoritboliger" />
		<div className="widest centered">
			<h1>This is the favorites view</h1>

			{auth.favorites.length ? (
				auth.favorites.map((favorite) => <FavoriteCard data={favorite} key={favorite.id} />)
			) : (
				<p>
					Du har ingen favorit boliger lige nu! Du kan se udbuddet af boliger
					til salg <Link to="/homes">her</Link>{" "}
				</p>
			)}
		</div>
		</>
	) : (
		<Navigate to="/login" />
	);
};

export default Favorites;
