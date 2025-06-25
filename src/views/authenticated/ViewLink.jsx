import { useEffect, useState } from "react";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import { useSearchParams } from "react-router";
import apiClient from "../../apiClient";

function ViewLink() {
    const [searchParams] = useSearchParams();
    const linkId = searchParams.get('linkId');
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(location.state)
        const userId = localStorage.getItem('userId');
        fetchData(userId, linkId);
    }, []);

    async function fetchData(userId, linkId) {
        const response = await apiClient.get(`link/referrer-stats/user/${userId}/link/${linkId}`);
        setData(response.data);
    }

    return (
        <>
            <AuthenticatedNavbar />
            <main>
                <div className="container m-5 mx-auto">
                    <div className="row">
                        <div className="col">
                            <h4 className="pb-3">View Link</h4>
                            <p className="fw-lighter">
                                Below are the referrers (where your link was clicked from). Clicks from
                                unknown sources are marked as Other.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col border pt-3">
                            <p className="fw-lighter">

                                Original Link: <a href={data.originalUrl} className="fw-lighter text-white">
                                    <u>{data.originalUrl}</u>
                                </a>
                            </p>

                            <p className="fw-lighter">
                                Shortened Link: <a href={data.shortenedUrl} className="fw-lighter text-white">
                                    <u>{data.shortenedUrl}</u>
                                </a>
                            </p>
                            <table className="table table-hover my-4">
                                <thead>
                                    <tr>
                                        <th scope="col">Referrer</th>
                                        <th scope="col">Clicks</th>
                                    </tr>
                                </thead>
                                <tbody className="fw-lighter">
                                    {data.referrers?.map((r) => (
                                        <tr>
                                            <td><a href={r.referrer} className="fw-lighter text-white">
                                                <u>{r.referrer}</u>
                                            </a></td>
                                            <td>{r.clickCount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default ViewLink;