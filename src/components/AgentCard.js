/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const AgentCard = ({ data }) => {
	const style = css`
		border-radius: 0.25rem;
		display: grid;
		grid-template-rows: minmax(15rem, 20vw);
		box-shadow: 0 0.5rem 0.75rem 0.125rem #0073e118;
		background-color: white;
		position: relative;

		& .agentCard__body {
			padding: 1rem 2rem;
			text-align: center;
		}
		& .agentCard__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top center;
		}
	`;
	return (
		<Link
			to={`/agents/${data.id}`}
			style={{ color: "black", textDecoration: "none" }}
		>
			<article css={style}>
				<img className="agentCard__img" src={data.image.url} alt="" />
				<div className="agentCard__body">
					<h2 className="heading">{data.name}</h2>
					<p className="txt">{data.title}</p>
					<div className="agentCard__footer">
						<p className="txt">mail linkedin</p>
					</div>
				</div>
			</article>
		</Link>
	);
};

export default AgentCard;
