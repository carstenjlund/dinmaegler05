/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

const Favorite = ({ isFav, homeId, handleFavorites }) => {
	const [isFavorite, setIsFavorite] = useState(isFav);
	const style = css`
		width: 2rem;
		height: 2rem;
		background-color: lightgray;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
	`;
	const styleSpacer = css`
		width: 2rem;
		height: 2rem;
		padding: 0.5rem;
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
		z-index: 2;
	`;
	const handleClick = (e) => {
		e.preventDefault();
		setIsFavorite(!isFavorite);
		handleFavorites(homeId);
	};
	return (
		<div onClick={handleClick} css={styleSpacer}>
			<div css={style}>{isFavorite ? <IoHeart /> : <IoHeartOutline />}</div>
		</div>
	);
};

export default Favorite;
