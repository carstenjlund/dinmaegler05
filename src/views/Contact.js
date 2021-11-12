import { Helmet } from "react-helmet-async";
import HeadlineRibbon from "../components/HeadlineRibbon";
const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Kontakt - Din Mægler</title>
			</Helmet>
			<HeadlineRibbon headline="Kontakt os" />
			<h1>This is the contact us view</h1>
		</>
	);
};

export default Contact;
