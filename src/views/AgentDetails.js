import { Helmet } from "react-helmet";
import HeadlineRibbon from "../components/HeadlineRibbon";
const AgentDetails = () => {
	return (
		<>
			<Helmet>
				<title>Specifik mægler - Din Mægler</title>
			</Helmet>
			<HeadlineRibbon headline="Kontakt en medarbejder" />
			<h1>This is the agent details view</h1>
		</>
	);
};

export default AgentDetails;
