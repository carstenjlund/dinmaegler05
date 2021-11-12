import { Helmet } from "react-helmet-async";
const Error = () => {
	return (
		<>
			<Helmet>
				<title>ERROR!!! - Din Mægler</title>
			</Helmet>
			<h1>This is the error/fallback view</h1>
		</>
	);
};

export default Error;
