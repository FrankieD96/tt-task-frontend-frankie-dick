import { NavLink } from "react-router-dom"
import "./nav.css"

function Nav() {
    return (
        <nav className="nav-links">
            <NavLink activeclassname="active" to="/">Members</NavLink>
            <NavLink activeclassname="active" to="/add">Add Member</NavLink>
        </nav>
    )
}

export default Nav