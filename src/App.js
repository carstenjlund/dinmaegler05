import { Router } from "@reach/router";
import { Routes, Route } from "react-router-dom"
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
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="homes" element={<PropertyList />} />
				<Route path="homes/:id"  element={<PropertyDetails />} />
				<Route path="agents"  element={<AgentList />} />
				<Route path="agents/:id"  element={<AgentDetails />} />
				<Route path="favorites"  element={<Favorites />} />
				<Route path="contact"  element={<Contact />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Routes>
			<Footer />
		</AuthProvider>
		</HelmetProvider>
	);
}

export default App;
