import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import TwoColumns from "../components/TwoColumns";

const PropertyList = () => {
	const [properties, setProperties] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios("https://dinmaegler.herokuapp.com/homes").then((response) => {
			setProperties(response.data);
			setLoading(false);
		});
	}, []);
	return loading ? (
		<h3 className="widest centered">loading...</h3>
	) : (
		<div className="widest centered">
			<Helmet>
				<title>Boliger til salg - Din Mægler</title>
			</Helmet>
			<h1>This is property list the view</h1>
			<TwoColumns>
				{properties.map((property) => (
					<PropertyCard data={property} />
				))}
			</TwoColumns>
		</div>
	);
};

export default PropertyList;
