/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";
import LayoutSection from "./LayoutSection";
import ThreeColumns from "./ThreeColumns";
import AgentCard from "./AgentCard";
import { theme } from "./theme";

const FeaturedAgents = () => {
	const [featured, setFeatured] = useState();

	useEffect(() => {
		axios("https://dinmaegler.herokuapp.com/agents?_limit=3").then((response) =>
			setFeatured(response.data)
		);
	}, []);

	return (
		<LayoutSection color={theme.colors.background01}>
			<div className="widest centered">
				<h2 className="wide centered heading-l txt-centered space-top-0">
					Mød vores engagerede medarbejdere
				</h2>
				<p className="wide centered txt-l txt-centered space-bottom-xl">
					Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
					Kontakt en af vores medarbejdere.
				</p>
				<ThreeColumns>
					{featured && featured.map((agent) => <AgentCard data={agent} />)}
				</ThreeColumns>
			</div>
		</LayoutSection>
	);
};

export default FeaturedAgents;
