/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"


const HeadlineRibbon = ({headline}) => {

    const style = css`
        height: calc(4rem + 4vw);
        background-image: url("/headline_background.png");
        background-size: cover;
        background-position: center bottom;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #33485C;
        background-blend-mode: multiply;
        & h1 {
            color: white;

        }
    `
    return ( 
        <div css={style}>
            <h1 className="heading-xl">{headline}</h1>
        </div>
     );
}

export default HeadlineRibbon;