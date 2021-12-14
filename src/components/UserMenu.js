/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import useAuth from "../customHooks/useAuth"


const UserMenu = () => {

    const auth = useAuth()

    const style = css`
        position: absolute;
        top: 100%;
        padding-top: 0.75rem;
        right: 0;
        width: 10rem;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.4s ease, visibility 0s 0.6s;
        
    `
    const styleMenu = css`
        background-color: rgba(230,230,230,0.9);
        padding: 1px 1rem;
        color: black;
       

        & a {
            color: black;
            text-decoration: none;
        }
    `

    const handleLogoutClick = () => {
        auth.handleLogout()
    }

    return ( 
        <div css={style} className="user-menu">
            <div css={styleMenu}>
            <p>my profile</p>
            <p onClick={handleLogoutClick}>log out</p>
            </div>
        </div>
     );
}
 
export default UserMenu;