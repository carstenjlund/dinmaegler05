/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TwoColumns = (props) => {
	const style = css`
		@media only screen and (min-width: 30rem) {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
			grid-column-gap: 2rem;
		}
	`;
	return <div css={style}>{props.children}</div>;
};

export default TwoColumns;
