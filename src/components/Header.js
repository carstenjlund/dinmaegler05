import { Link } from "@reach/router";
import Navigation from "./Navigation";
const Header = () => {
	return (
		<header>
			<section>
				phone email <Link to="/login">log ind</Link>
			</section>
			<section>
				<Link to="/">din mægler</Link>
				<Navigation />
			</section>
		</header>
	);
};

export default Header;
