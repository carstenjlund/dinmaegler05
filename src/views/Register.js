import { Helmet } from "react-helmet";
import HeadlineRibbon from "../components/HeadlineRibbon";
const Register = () => {
	return (
		<>
			<Helmet>
				<title>Opret bruger - Din Mægler</title>
			</Helmet>
			<HeadlineRibbon headline="Opret bruger" />
			<h1>This is the Register view</h1>
		</>
	);
};

export default Register;
