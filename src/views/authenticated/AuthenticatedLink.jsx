import { NavLink } from "react-router";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";

function AuthenticatedLink() {
    return (
        <>
            <AuthenticatedNavbar />
            <main>
                <div className="container m-5 mx-auto">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="pb-3">Links</h4>
                        <NavLink to="/authenticated/add-link" type="button" className="btn btn-primary ms-4">ADD LINK</NavLink>
                    </div>
                    <p className="fw-lighter">
                        Below are the links you have shortened. You can click on the VIEW button to see detailed
                        analytics about the link or DELETE the link.
                    </p>
                    <div className="row">
                        <div className="col border">
                            <div className="table-responsive">
                                <table className="table table-hover my-4">
                                    <thead>
                                        <tr>
                                            <th scope="col">Original Link</th>
                                            <th scope="col">Shortened Link</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Clicks</th>
                                            <th scope="col" colSpan={2}>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-lighter">
                                        <tr>
                                            <td><a href="https://github.com/MlamliLolwane" className="fw-lighter text-white">
                                                <u>https://github.com/MlamliLolwane</u>
                                            </a></td>
                                            <td><a href="https://sht.ly/txldat" className="fw-lighter text-white">
                                                <u>https://sht.ly/txldat</u>
                                            </a></td>
                                            <td>17 March 2025</td>
                                            <td>17</td>
                                            <td>
                                                <div className="dropdown d-lg-none">
                                                    <button className="btn btn-secondary dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Options
                                                    </button>
                                                    <ul className="dropdown-menu rounded-0">
                                                        <li><a className="dropdown-item" href="#">DELETE</a></li>
                                                        <li><a className="dropdown-item" href="#">VIEW</a></li>
                                                    </ul>
                                                </div>
                                                <button type="button" className="btn btn-secondary rounded-0 d-none d-lg-inline">DELETE</button>
                                                <NavLink to="/authenticated/links/view" className="btn btn-primary ms-4 d-none d-lg-inline">VIEW</NavLink></td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://youtube.com" className="fw-lighter text-white">
                                                <u>https://youtube.com</u></a></td>
                                            <td><a href="https://sht.ly/gshtat" className="fw-lighter text-white">
                                                <u>https://sht.ly/gshtat</u></a></td>
                                            <td>08 April 2025</td>
                                            <td>6</td>
                                            <td>
                                                <div className="dropdown d-lg-none">
                                                    <button className="btn btn-secondary dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Options
                                                    </button>
                                                    <ul className="dropdown-menu rounded-0">
                                                        <li><a className="dropdown-item" href="#">DELETE</a></li>
                                                        <li><a className="dropdown-item" href="#">VIEW</a></li>
                                                    </ul>
                                                </div>
                                                <button type="button" className="btn btn-secondary rounded-0 d-none d-lg-inline">DELETE</button>
                                                <NavLink to="/authenticated/links/view" className="btn btn-primary ms-4 d-none d-lg-inline">VIEW</NavLink></td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://instagram.com" className="fw-lighter text-white">
                                                <u>https://instagram.com</u></a></td>
                                            <td><a href="https://sht.ly/thdsta" className="fw-lighter text-white">
                                                <u>https://sht.ly/thdsta</u></a></td>
                                            <td>10 June 2025</td>
                                            <td>24</td>
                                            <td>
                                                <div className="dropdown d-lg-none">
                                                    <button className="btn btn-secondary dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Options
                                                    </button>
                                                    <ul className="dropdown-menu rounded-0">
                                                        <li><a className="dropdown-item" href="#">DELETE</a></li>
                                                        <li><a className="dropdown-item" href="#">VIEW</a></li>
                                                    </ul>
                                                </div>
                                                <button type="button" className="btn btn-secondary rounded-0 d-none d-lg-inline">DELETE</button>
                                                <NavLink to="/authenticated/links/view" className="btn btn-primary ms-4 d-none d-lg-inline">VIEW</NavLink></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AuthenticatedLink;