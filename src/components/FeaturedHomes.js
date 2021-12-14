import { useState, useEffect } from "react";
import axios from "axios";
import LayoutSection from "../layout/LayoutSection";
import TwoColumns from "../layout/TwoColumns";
import PropertyCard from "./PropertyCard";
import { theme } from "../layout/theme";

const FeaturedHomes = () => {
	const [featured, setFeatured] = useState();

	useEffect(() => {
		axios("https://dinmaegler.herokuapp.com/homes?_limit=4").then((response) =>
			setFeatured(response.data)
		);
	}, []);

	return (
		<LayoutSection color={theme.colors.background01}>
			<div className="widest centered">
				<h2 className="narrow centered heading-l txt-centered space-top-0">
					Udvalgte boliger
				</h2>
				<p className="narrow centered txt-l txt-centered space-bottom-xl">
					There are many variations of passages of Lorem Ipsum available but the
					this in majority have suffered alteration in some
				</p>
				<TwoColumns>
					{featured &&
						featured.map((property) => <PropertyCard data={property} key={property.id} />)}
				</TwoColumns>
			</div>
		</LayoutSection>
	);
};

export default FeaturedHomes;
