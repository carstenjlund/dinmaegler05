import Hero from "../components/Hero";
import RangeSliderRc from "../components/RangeSliderRc";

const Home = () => {
	return (
		<>
			<Hero />
			<div className="widest centered">
				<h1>This is the home view</h1>
				<RangeSliderRc />
			</div>
		</>
	);
};

export default Home;
