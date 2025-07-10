import { NavLink } from "react-router";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import { useEffect, useState } from "react";
import apiClient from "../../apiClient";
import dayjs from "dayjs";

function AuthenticatedLink() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        fetchData(userId);
    }, []);

    async function fetchData(userId) {
        const response = await apiClient.get(`/link/link-details/user/${userId}`);
        setData(response.data);
    }

    async function deleteLink(linkId) {
        await apiClient.delete(`/link/${linkId}`);
        fetchData(localStorage.getItem('userId'));
    }

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
                                        {data?.map((d) => (
                                            <tr>
                                                <td style={{width:"10px"}}><a href={d.originalUrl} target="_blank" className="fw-lighter text-white">
                                                    <u>{d.originalUrl}</u>
                                                </a></td>
                                                <td><a href={d.shortenedUrl} target="_blank" className="fw-lighter text-white">
                                                    <u>{d.shortenedUrl}</u>
                                                </a></td>
                                                <td>{dayjs(d.createdAt).format("D MMMM, YYYY h:mm A")}</td>
                                                <td>{d.clickCount}</td>
                                                <td>
                                                    <div className="dropdown d-lg-none">
                                                        <button className="btn btn-secondary dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Options
                                                        </button>
                                                        <ul className="dropdown-menu rounded-0">
                                                            <li><button type="button" className="dropdown-item" onClick={() => deleteLink(d.linkId)}>
                                                                DELETE</button></li>
                                                            <li><NavLink className="dropdown-item" 
                                                            to={`/authenticated/links/view?linkId=${d.linkId}`} >VIEW</NavLink></li>
                                                        </ul>
                                                    </div>
                                                    <button type="button" className="btn btn-secondary rounded-0 d-none d-lg-inline"
                                                    onClick={() => deleteLink(d.linkId)}>DELETE</button>
                                                    <NavLink to={`/authenticated/links/view?linkId=${d.linkId}`}
                                                    className="btn btn-primary ms-4 d-none d-lg-inline">VIEW</NavLink></td>
                                            </tr>
                                        ))}
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
