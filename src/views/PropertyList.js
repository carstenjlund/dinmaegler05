import { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import LayoutSection from "../components/LayoutSection";
import TwoColumns from "../components/TwoColumns";
import HeadlineRibbon from "../components/HeadlineRibbon";

const PropertyList = () => {
	const [properties, setProperties] = useState();
	const [loading, setLoading] = useState(true);
	const search = useLocation().search;
	const searchTerm = new URLSearchParams(search).get("search");

	useEffect(() => {
		axios("https://dinmaegler.herokuapp.com/homes").then((response) => {
			if (searchTerm) {
				let foundProperties = response.data.filter((property) => {
					return (
						property.description
							.toLowerCase()
							.includes(searchTerm.toLowerCase()) ||
						property.adress1.toLowerCase().includes(searchTerm.toLowerCase()) ||
						(property.adress2 &&
							property.adress2.toLowerCase().includes(searchTerm.toLowerCase()))
					);
				});
				setProperties(foundProperties);
			} else {
				setProperties(response.data);
			}

			setLoading(false);
		});
	}, [searchTerm]);

	return loading ? (
		<LayoutSection>
			<h3 className="widest centered">loading...</h3>
		</LayoutSection>
	) : (
		<>
			<Helmet>
				<title>Boliger til salg - Din Mægler</title>
			</Helmet>
			<HeadlineRibbon headline="Boliger til salg" />
		<LayoutSection>
			<div className="widest centered">
				<TwoColumns>
					{properties.map((property) => (
						<PropertyCard data={property} key={property.id} />
					))}
				</TwoColumns>
			</div>
		</LayoutSection>
		</>
	);
};

export default PropertyList;
