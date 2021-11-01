/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeroSearchbox from "./HeroSearchbox";

const Hero = () => {
	const style = css`
		height: calc(25vw + 15rem);
		background-image: url("hero.jpg");
		background-position: 50% 90%;
		background-size: cover;
		background-color: black;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		&:before {
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: #aaaaaa;
			mix-blend-mode: multiply;
		}
	`;
	const styleHeading = css`
		color: white;
		text-align: center;
		position: relative;
		z-index: 2;
	`;
	return (
		<section css={style} className="Hero">
			<h1 css={styleHeading} className="heading-xl">
				Søg efter din drømmebolig
			</h1>
			<HeroSearchbox />
		</section>
	);
};

export default Hero;
