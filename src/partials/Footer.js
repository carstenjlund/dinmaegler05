/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FooterIconGroup from "../components/FooterIconGroup";
import { IoMdCall } from "react-icons/io";
import { IoPaperPlane } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { theme } from "../layout/theme";

const Footer = () => {
	const top = css`
		background-color: ${theme.colors.background01};
		padding: 5rem 0;
	`;
	const middle = css`
		padding: 3.5rem 0 5rem;
	`;
	const bottom = css`
		background-color: ${theme.colors.primary};
		color: ${theme.colors.light};
		padding: 0.75rem;
	`;
	const grid = css`
		display: grid;
		grid-template-columns: 28rem 1fr;
		grid-column-gap: 5rem;
	`;
	const light = css`
		background-color: white;
		padding: 3rem;
		position: absolute;
		width: 28rem;
		box-sizing: border-box;
		border: 1px solid black;
	`;
	const navStyle = css`
		grid-column-start: 2;
	`;
	return (
		<footer>
			<section css={top}>
				<div className="widest centered">
					<img src="/din_maegler_logo.png" alt="" />
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have <br />
						suffered alteration in some form, by injected humour, or randomised
						words.
					</p>
				</div>
				<div
					className="widest centered"
					css={grid}
					style={{ marginTop: "3rem" }}
				>
					<div css={light}>
						<FooterIconGroup
							icon={<IoMdCall color={`${theme.colors.light}`} size="2em" />}
							smallText="Ring til os"
							bigText="+45 7070 4000"
						/>
						<FooterIconGroup
							icon={
								<IoPaperPlane color={`${theme.colors.light}`} size="2em" />
							}
							smallText="Send en mail"
							bigText="4000@dinmaegler.com"
						/>
						<FooterIconGroup
							icon={
								<FaMapMarkerAlt color={`${theme.colors.light}`} size="2em" />
							}
							smallText="Butik"
							bigText="Stændertorvet 78, 4000 Roskilde"
						/>

						<p style={{ marginBottom: 0 }}>
							Din Mægler Roskilde er din
							<br />
							boligbutik i lokalområdet
						</p>
					</div>
					<div css={navStyle}>
						<h4 style={{ marginTop: 0 }}>Quick Links</h4>
						<p>Boliger til salg</p>
						<p>Mæglere</p>
						<p>Kontakt os </p>
						<p>log ind / bliv bruger</p>
					</div>
				</div>
			</section>
			<section css={middle}>
				<div className="widest centered" css={grid}>
					<img src="/dms_logo.png" alt="" style={{ gridColumnStart: 2 }} />
				</div>
			</section>
			<section css={bottom}>
				<p style={{ margin: 0, textAlign: "center" }}>
					Layout By Jit Banik 2020
				</p>
			</section>
		</footer>
	);
};

export default Footer;
