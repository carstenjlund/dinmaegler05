/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { theme } from "./theme";

const GlobalStyles = () => {
	return (
		<Global
			styles={css`
				@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

				body {
					margin: 0;
					font-family: "Roboto", sans-serif;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}

				.widest {
					max-width: 74rem;
					padding: 0 2rem;
				}
				.wide {
					max-width: 58rem;
				}
				.narrow {
					max-width: 40rem;
				}
				.centered {
					margin-left: auto;
					margin-right: auto;
				}
				.flex-between {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.space-top-0 {
					margin-top: 0;
				}
				.space-bottom-0 {
					margin-bottom: 0;
				}
				.space-bottom-xl {
					margin-bottom: calc(2.5rem + 0.25vw);
				}

				.txt-xs {
					font-size: 0.75rem;
				}
				.txt-s {
					font-size: 0.875rem;
				}
				.txt {
					font-size: calc(0.75rem + 0.25vw);
				}
				.txt-l {
					line-height: 1.5;
					font-size: calc(0.875rem + 0.25vw);
				}
				.txt-xl {
					line-height: 1.8;
					font-size: calc(1rem + 0.25vw);
					margin-top: calc(1rem + 0.25vw);
					margin-bottom: calc(1rem + 0.25vw);
				}
				.txt-xxl {
					font-size: 1.5rem;
				}
				.txt-centered {
					text-align: center;
				}
				.heading-xl {
					font-size: calc(1rem + 2vw);
				}
				.heading-l {
					font-size: calc(0.75rem + 1.5vw);
				}
				.heading {
					font-size: calc(0.875rem + 0.375vw);
				}
				.heading-bottombar {
					position: relative;

					&::after {
						content: "";
						position: absolute;
						top: 110%;
						left: 0;
						height: 0.25rem;
						width: 3.75rem;
						background-color: ${theme.colors.primary};
					}
				}

				label {
					display: block;
					margin-bottom: 0.25rem;
				}
				input {
					padding: 0.5rem;
					border-radius: 0.175rem;
					border: 1px solid ${theme.colors.para02};
					font-family: "Roboto", sans-serif;
					font-size: 1rem;
				}
				.button, button[type="submit"] {
					padding: 0.5rem 2rem;
					border-radius: 0.175rem;
					border: 1px solid ${theme.colors.primary};
					background-color: ${theme.colors.primary};
					color: white;
				}
			`}
		/>
	);
};

export default GlobalStyles;
