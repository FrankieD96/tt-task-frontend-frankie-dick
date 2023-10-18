import { NavLink } from "react-router-dom"
import "./nav.css"

function Nav() {
    return (
        <nav>
            <NavLink to="/">Members</NavLink>
            <NavLink to="/add">Add Member</NavLink>
        </nav>
    )
}

export default Nav