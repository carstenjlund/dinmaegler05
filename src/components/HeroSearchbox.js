/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "./theme";

const HeroSearchbox = () => {
	const style = css`
		padding: 2rem;
		background-color: ${theme.colors.light};
		width: calc(10rem + 40vw);
		position: relative;
		z-index: 2;
	`;
	const styleFormGrid = css`
		display: grid;
		grid-template-columns: 1fr 10rem;
		grid-column-gap: 0.5rem;
	`;
	const styleFormFullWidth = css`
		grid-column: 1/-1;
	`;
	return (
		<div className="wide" css={style}>
			<h3 className="heading-bottombar">
				Søg blandt 158 boliger til salg i 74 butikker{" "}
			</h3>
			<form action="/homes">
				<div css={styleFormGrid}>
					<label htmlFor="search" css={styleFormFullWidth}>
						Hvad skal din næste bolig indeholde
					</label>
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
					/>
					<button type="submit">Søg</button>
				</div>
			</form>
		</div>
	);
};

export default HeroSearchbox;
