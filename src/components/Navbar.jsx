import { NavLink } from "react-router";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function Navbar() {
    return (
        <>
            <LoginModal />
            <RegisterModal/>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-normal" to="/"><span style={{ color: "teal" }}>
                        <i className="bi bi-link-45deg"></i> LINK </span> <span className="fw-lighter">SHORTNER </span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item px-4">
                                <NavLink className="nav-link" aria-current="page" to="/">
                                    HOME <i className="bi bi-house-fill"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">ABOUT <i className="bi bi-info-circle-fill"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item px-4">
                                <NavLink className="nav-link" to="/contact">CONTACT <i className="bi bi-telephone-fill"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/links">LINKS <i className="bi bi-link-45deg"></i>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <button type="button" className="nav-link pe-3" data-bs-toggle="modal" data-bs-target="#registerModal">
                                REGISTER <i className="bi bi-person-fill-add"></i>
                            </button>
                            <button type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">
                                LOGIN <i className="bi bi-person-circle"></i>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>)
}

export default Navbar;