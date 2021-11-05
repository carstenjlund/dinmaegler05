import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import FeaturedHomes from "../components/FeaturedHomes";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Din Mægler</title>
			</Helmet>
			<Hero />
			<FeaturedHomes />
			<div className="widest centered">
				<h1>This is the home view</h1>
			</div>
		</>
	);
};

export default Home;
