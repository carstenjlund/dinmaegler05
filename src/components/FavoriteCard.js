/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import EnergyLabel from "./EnergyLabel";
import { Link } from "@reach/router";
import useAuth from "../customHooks/useAuth"

const FavoriteCard = ({ data }) => {
	const auth = useAuth()

	const style = css`
		border-radius: 0.25rem;
		display: grid;
		grid-template-columns: 2fr 3fr 3fr;
        grid-column-gap: 2rem;
		box-shadow: 0 0.5rem 0.75rem 0.125rem #0073e118;
		background-color: white;
		position: relative;
        padding: 1rem;
        margin-bottom: 2rem;

		& .propertyCard__middle {
		}
		& .propertyCard__right {

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

const handleClick = (e) => {
    e.preventDefault()
    auth.handleFavorites(data.id)
}
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
					
				</div>
                <div className="propertyCard__right">
                        <div className="flex-between">
                         <p className="txt">
							<EnergyLabel label={data.energylabel} />
							{data.rooms} rum/værelser &bull; {data.livingspace} m<sup>2</sup>{" "}
						</p>
						<h3 className="txt-xl pull-right">
							Kr. {data.price.toLocaleString()}
						</h3>
                        </div>
                        <div className="flex-between">
                        <button className="button pull-right" onClick={handleClick} >Fjern fra favoritter</button>
					</div>
                    </div>
						
                    
				
			</article>
		</Link>
	);
};

export default FavoriteCard;
