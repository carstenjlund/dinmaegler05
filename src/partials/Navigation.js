/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { theme } from "../components/theme";

const Navigation = ({ token }) => {
	const verticalCenter = css`
		display: flex;
		align-items: center;
	`;
	const navLink = css`
		color: ${theme.colors.para01};
		text-decoration: none;

		&:not(:first-of-type) {
			margin-left: 2.5rem;
		}
	`;
	return (
		<nav css={verticalCenter}>
			<Link to="/homes" css={navLink}>
				Boliger til salg
			</Link>
			<Link to="/agents" css={navLink}>
				Mæglere
			</Link>
			{token && (
				<Link to="/favorites" css={navLink}>
					Mine favoritter
				</Link>
			)}
			<Link to="/contact" css={navLink}>
				Kontakt os
			</Link>
		</nav>
	);
};

export default Navigation;
