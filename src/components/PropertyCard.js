/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import EnergyLabel from "./EnergyLabel";

const PropertyCard = ({ data }) => {
	const style = css`
		border: 1px solid black;
		border-radius: 0.25rem;
		display: grid;
		grid-template-rows:
			minmax(15rem, 20vw)
		}
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
		<article css={style}>
			<img className="propertyCard__img" src={data.images[0].url} alt="" />
			<div className="propertyCard__body">
				<h2 className="heading-l">
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
		</article>
	);
};

export default PropertyCard;
