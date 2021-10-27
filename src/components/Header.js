import { Link } from "@reach/router";
const Header = () => {
	return (
		<header>
			<section>phone email login</section>
			<section>
				<Link to="/">din mægler</Link>
				<nav>navigation here</nav>
			</section>
		</header>
	);
};

export default Header;
