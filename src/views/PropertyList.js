import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import LayoutSection from "../components/LayoutSection";
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
		<LayoutSection>
			<h3 className="widest centered">loading...</h3>
		</LayoutSection>
	) : (
		<LayoutSection>
			<div className="widest centered">
				<Helmet>
					<title>Boliger til salg - Din Mægler</title>
				</Helmet>
				<TwoColumns>
					{properties.map((property) => (
						<PropertyCard data={property} />
					))}
				</TwoColumns>
			</div>
		</LayoutSection>
	);
};

export default PropertyList;
