import { Router } from "@reach/router";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import AgentList from "./views/AgentList";
import AgentDetails from "./views/AgentDetails";
import PropertyList from "./views/PropertyList";
import PropertyDetails from "./views/PropertyDetails";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Register from "./views/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<Router>
				<Home path="/" />
				<PropertyList path="homes" />
				<PropertyDetails path="homes/:id" />
				<AgentList path="agents" />
				<AgentDetails path="agents/:id" />
				<Favorites path="favorites" />
				<Contact path="contact" />
				<Login path="login" />
				<Register path="register" />
			</Router>
			<Footer />
		</>
	);
}

export default App;
