import { Helmet } from "react-helmet";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Din Mægler</title>
			</Helmet>
			<Hero />
			<div className="widest centered">
				<h1>This is the home view</h1>
			</div>
		</>
	);
};

export default Home;
