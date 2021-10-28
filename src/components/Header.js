/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "@reach/router";
import Navigation from "./Navigation";
import { theme } from "./theme";
const Header = () => {
	const darkband = css`
		background-color: ${theme.colors.primary};
		color: ${theme.colors.light};
		padding: 0.75rem 0;
	`;
	const lightband = css`
		padding: 0.75rem 0;
	`;
	return (
		<header>
			<section css={darkband}>
				<div className="widest centered flex-between">
					<div className="left-group">phone email</div>
					<Link to="/login" style={{ color: "white", textDecoration: "none" }}>
						log ind
					</Link>
				</div>
			</section>
			<section css={lightband}>
				<div className="widest centered flex-between">
					<Link to="/">
						<img src="din_maegler_logo.png" alt="" />
					</Link>
					<Navigation />
				</div>
			</section>
		</header>
	);
};

export default Header;
