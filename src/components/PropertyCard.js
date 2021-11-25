/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import EnergyLabel from "./EnergyLabel";
import { Link } from "@reach/router";
import Favorite from "./Favorite";
import useAuth from "../customHooks/useAuth"

const PropertyCard = ({ data }) => {
	const auth = useAuth()

	const style = css`
		border-radius: 0.25rem;
		display: grid;
		grid-template-rows: minmax(15rem, 20vw);
		box-shadow: 0 0.5rem 0.75rem 0.125rem #0073e118;
		background-color: white;
		position: relative;

		& .propertyCard__body {
			padding: 1rem 2rem;
		}
		& .propertyCard__footer {
			display: flex;
			justify-content: space-between;
			margin-top: 2rem;
			padding-top: 1rem;
			border-top: 2px solid lightgray;
		}
		& .propertyCard__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		& .pull-right {
			margin-left: auto;
		}
	`;
	return (
		<Link
			to={`/homes/${data.id}`}
			style={{ color: "black", textDecoration: "none" }}
		>
			<article css={style}>
				<img className="propertyCard__img" src={data.images[0].url} alt="" />
				<div className="propertyCard__body">
					<h2 className="heading">
						{data.adress1}
						{data.adress2 && ` ${String.fromCharCode(8226)} ${data.adress2}`}
					</h2>
					<p className="txt">
						{data.postalcode} {data.city}{" "}
					</p>
					<p className="txt">
						{data.type} &bull; Ejerudgift: {data.cost.toLocaleString()} kr.
					</p>
					<div className="propertyCard__footer">
						<p className="txt">
							<EnergyLabel label={data.energylabel} />
							{data.rooms} rum/værelser &bull; {data.livingspace} m<sup>2</sup>{" "}
						</p>
						<h3 className="txt-xl pull-right">
							Kr. {data.price.toLocaleString()}
						</h3>
					</div>
				</div>
				{auth.token && (
					<Favorite
						isFav={auth.favIds.includes(data.id)}
						homeId={data.id}
						handleFavorites={auth.handleFavorites}
					/>
				)}
			</article>
		</Link>
	);
};

export default PropertyCard;
