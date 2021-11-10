import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import FeaturedHomes from "../components/FeaturedHomes";
import FeaturedAgents from "../components/FeaturedAgents";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Din Mægler</title>
			</Helmet>
			<Hero />
			<FeaturedHomes />
			<FeaturedAgents />
		</>
	);
};

export default Home;
