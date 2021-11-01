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
				.centered {
					margin: 0 auto;
				}
				.flex-between {
					display: flex;
					justify-content: space-between;
				}

				.txt-xs {
					font-size: 0.75rem;
				}
				.txt-s {
					font-size: 0.875rem;
				}
				.txt-l {
					font-size: 1.125rem;
				}
				.txt-xl {
					font-size: 1.25rem;
				}
				.txt-xxl {
					font-size: 1.5rem;
				}
				.heading-xl {
					font-size: calc(1rem + 2vw);
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
				button[type="submit"] {
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
