import React from 'react'
import {
    Link,
    NavLink,
} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-center ">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <Link
                        className="navbar-brand ml"
                        to="/"
                    >
                        Dashboard
                    </Link>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link btn"

                        to="/axie"
                    >
                        Axie
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"

                        to="/chess"
                    >
                        Dchess
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"

                        to="/cryptomines"
                    >
                        Cryptomines
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"

                        to="/pvu"
                    >
                        Pvu
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
