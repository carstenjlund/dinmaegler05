/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import HeadlineRibbon from "../components/HeadlineRibbon";
import LayoutSection from "../components/LayoutSection";
import AgentDetailsCard from "../components/AgentDetailsCard";

const AgentDetails = ({id}) => {

	const [agent, setAgent] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios("https://dinmaegler.herokuapp.com/agents/" + id )
			.then(response => {setAgent(response.data)
			setLoading(false)
			})
	}, [id]);

	const style = css`
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-column-gap: 2rem;
	`

	return loading ? (<p>loading</p>) : (
		<>
			<Helmet>
				<title>Specifik mægler - Din Mægler</title>
			</Helmet>
			<HeadlineRibbon headline="Kontakt en medarbejder" />
			<LayoutSection>
				<div className="widest centered" css={style}>
				<AgentDetailsCard data={agent} includeAbout />
				<div className="rightColumn">
					<form action="/homes">
						<input type="search" name="search" id="search" placeholder="Søg efter en bolig..." />
					</form>

				</div>
				</div>
			
			</LayoutSection>
					</>
	);
};

export default AgentDetails;
