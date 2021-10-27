import { Link } from "@reach/router";

const Navigation = () => {
	return (
		<nav>
			<Link to="/homes">Boliger til salg</Link>
			<Link to="/agents">Mæglere</Link>
			<Link to="/contact">Kontakt os</Link>
		</nav>
	);
};

export default Navigation;
