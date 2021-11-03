/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const LayoutSection = ({ children, color }) => {
	const style = css`
		padding: 6rem 0;
		${color && `background-color: ${color}`}
	`;
	return <section css={style}>{children}</section>;
};

export default LayoutSection;
