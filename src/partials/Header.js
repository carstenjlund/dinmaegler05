/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { theme } from "../components/theme";
import useAuth from "../customHooks/useAuth"
import UserMenu from "../components/UserMenu";

const Header = () => {
	const auth = useAuth()

	const darkband = css`
		background-color: ${theme.colors.primary};
		color: ${theme.colors.light};
		padding: 0.75rem 0;
	`;
	const lightband = css` 	
		padding: 0.75rem 0;
	`;

	const myuserdimmer = css`
		margin: 0;
		cursor: pointer;
		position: relative;

		&:hover > .user-menu {
			visibility: visible;
			opacity: 1;
			transition: opacity 0.4s ease-out, visibility 0s 0s;
		}
	`

	return (
	
		<header>
			<section css={darkband}>
				<div className="widest centered flex-between">
					<div className="left-group">phone email</div>
					{!auth.token ? (
						<Link
							to="/login"
							style={{ color: "white", textDecoration: "none" }}
						>
							log ind
						</Link>
					) : (

						<div css={myuserdimmer}>
							{auth.username}
							<UserMenu />
						</div>
					)}
				</div>
			</section>
			<section css={lightband}>
				<div className="widest centered flex-between">
					<Link to="/">
						<img src="/din_maegler_logo.png" alt="" />
					</Link>
					<Navigation token={auth.token} />
				</div>
			</section>
		</header>
	);
};

export default Header;
