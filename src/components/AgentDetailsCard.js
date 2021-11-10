/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { IoMdCall } from "react-icons/io";
import { IoPaperPlane } from "react-icons/io5";


const AgentDetailsCard = ({data, includeAbout}) => {

    const style = css`
        border: 2px solid lightgray;
        padding: 2rem;
        
    `
    const styleFigure = css`
        width: 100%;
        margin: 0;
        display: grid;
        grid-template-columns: 4fr 3fr;
        grid-column-gap: 2rem;
        
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    `


    

    return ( 
        <article css={style}>
            <figure css={styleFigure}>
                <div>
                <img src={data.image.url} alt="" />
                </div>
                <figcaption>
                    <h3 className="space-top-0">{data.name}</h3>
                    <p className="space-bottom-xl agent-title-bottombar">{data.title}</p>
                    <p style={{display:"flex", alignItems:"center"}}><IoMdCall size="1.25rem" style={{marginRight:"1rem"}} /> {data.phone}</p>
                    <p style={{display:"flex", alignItems:"center"}}><IoPaperPlane size="1.25rem" style={{marginRight:"1rem"}} /> {data.email}</p>
                </figcaption>
            </figure>
            { includeAbout ? (
                <>
            <h2 className="space-bottom-xl agent-about-bottombar">Om {data.name}</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
            </>
            ) : null
            }
            </article>
     );
}
 
export default AgentDetailsCard;