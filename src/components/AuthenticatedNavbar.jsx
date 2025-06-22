import { NavLink } from "react-router";
import LogoutModal from "./LogoutModal";

function AuthenticatedNavbar() {
    return (
        <>
            <LogoutModal />
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-normal" to="/authenticated/home"><span style={{ color: "teal" }}>
                        <i className="bi bi-link-45deg"></i> LINK </span>SHORTNER</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/authenticated/home">
                                    HOME <i className="bi bi-house-fill"></i></NavLink>
                            </li>
                            <li className="nav-item px-lg-5">
                                <NavLink className="nav-link" to="/authenticated/about">ABOUT <i className="bi bi-info-circle-fill"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/authenticated/contact">CONTACT <i className="bi bi-telephone-fill"></i>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <button type="button" className="nav-link me-sm-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                                LOGOUT <i className="bi bi-person-fill"></i>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>)
}

export default AuthenticatedNavbar;