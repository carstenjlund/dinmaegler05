import { useContext } from "react";
import { Link } from "@reach/router";
import { UserContext } from "../contexts/UserContext";
import { Redirect } from "@reach/router";

const Favorites = () => {
	const { token } = useContext(UserContext);
	return token ? (
		<div className="widest centered">
			<h1>This is the favorites view</h1>
			<p>
				Du har ingen favorit boliger lige nu! Du kan se udbuddet af boliger til
				salg <Link to="/homes">her</Link>{" "}
			</p>
		</div>
	) : (
		<Redirect to="/login" noThrow />
	);
};

export default Favorites;
