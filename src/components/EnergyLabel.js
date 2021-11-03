/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const EnergyLabel = ({ label }) => {
	const energyColors = {
		A: "green",
		B: "yellow",
		C: "orange",
		D: "red",
	};

	const style = css`
		padding: 0.25rem 0.375rem;
		margin-right: 1rem;
		background-color: ${energyColors[label]};
		font-weight: 700;
		color: white;
	`;

	return <span css={style}>{label}</span>;
};

export default EnergyLabel;
