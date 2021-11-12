/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoImageOutline } from "react-icons/io5";
import { IoLayersOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
//import { IoHeart } from "react-icons/io5";

const PropertyDetails = ({ id }) => {
	const [property, setProperty] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios(`https://dinmaegler.herokuapp.com/homes/${id}`).then((response) => {
			setProperty(response.data);
			setLoading(false);
		});
	}, [id]);

	const styleImgContainer = css`
		height: calc(5rem + 30vw);

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	`;

	const styleGridContainer = css`
		display: grid;
		grid-template-columns: 42% 16% 42%;
	`;

	return loading ? (
		<p>loading...</p>
	) : (
		<>
			<Helmet>
				<title>Specifik bolig - Din Mægler</title>
			</Helmet>
			<div css={styleImgContainer}>
				<img src={property.images[0].url} alt={property.adress1}/>
			</div>
			<div className="widest centered" css={styleGridContainer}>
				<div>
					<p>
						{property.adress1} {property.adress2}
					</p>
					<p>
						{property.postalcode} {property.city}
					</p>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignSelf: "center",
					}}
				>
					<IoImageOutline size="2.5rem" color="#bbb" />
					<IoLayersOutline size="2.5rem" color="#bbb" />
					<IoLocationOutline size="2.5rem" color="#bbb" />
					<IoHeartOutline size="2.5rem" color="#bbb" />
				</div>
				<h2 style={{ textAlign: "right" }}>
					Kr. {property.price.toLocaleString()}
				</h2>
			</div>
		</>
	);
};

export default PropertyDetails;
