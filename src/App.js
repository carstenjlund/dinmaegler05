import { Router } from "react-router-dom";
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
import GlobalStyles from "./components/GlobalStyles";
import AuthProvider from "./contexts/AuthContext";
import { HelmetProvider } from 'react-helmet-async';

function App() {
	return (
		<HelmetProvider>
		<AuthProvider>
			<GlobalStyles />
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
		</AuthProvider>
		</HelmetProvider>
	);
}

export default App;
