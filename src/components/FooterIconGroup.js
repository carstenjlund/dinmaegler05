/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../layout/theme";

const FooterIconGroup = ({ icon, smallText, bigText }) => {
	const grid = css`
		display: grid;
		grid-template-columns: 3.75rem 1fr;
		grid-column-gap: 0.75rem;
		margin-bottom: 1.75rem;
	`;
	const verticalCenter = css`
		display: flex;
		flex-direction: column;
		justify-content: center;
	`;
	const round = css`
		width: 3.75rem;
		height: 3.75rem;
		border-radius: 50%;
		background-color: ${theme.colors.primary};
		display: flex;
		justify-content: center;
		align-items: center;
	`;
	const noMargin = css`
		margin: 0;
	`;
	return (
		<div css={grid}>
			<div css={round}>{icon}</div>
			<div css={verticalCenter}>
				<p css={noMargin} className="txt-s">
					{smallText}
				</p>
				<p css={noMargin} className="txt-l">
					{bigText}
				</p>
			</div>
		</div>
	);
};

export default FooterIconGroup;
