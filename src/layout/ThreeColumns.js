/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ThreeColumns = (props) => {
	const style = css`
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
		grid-gap: 2rem;
	`;
	return <div css={style}>{props.children}</div>;
};

export default ThreeColumns;
