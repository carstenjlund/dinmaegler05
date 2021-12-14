import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import axios from "axios";
import AgentCard from "../components/AgentCard";
import ThreeColumns from "../layout/ThreeColumns";
import LayoutSection from "../layout/LayoutSection";
import HeadlineRibbon from "../components/HeadlineRibbon";
const AgentList = () => {
	const [agents, setAgents] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios("https://dinmaegler.herokuapp.com/agents").then((response) => {
			setAgents(response.data);
			setLoading(false);
		});
	}, []);
	return (
		<>
			<Helmet>
				<title>Medarbejdere - Din Mægler</title>
			</Helmet>
			<HeadlineRibbon headline="Medarbejdere i Roskilde" />
			<LayoutSection>
				<section className="widest centered">
					<ThreeColumns>
						{loading ? (
							<p>loading</p>
						) : (
							agents.map((agent) => <AgentCard data={agent} />)
						)}
					</ThreeColumns>
				</section>
			</LayoutSection>
		</>
	);
};

export default AgentList;
