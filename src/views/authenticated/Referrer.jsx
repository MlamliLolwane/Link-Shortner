import { useEffect, useState } from "react";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import apiClient from "../../apiClient";

function Referrer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        fetchData(userId);
    }, []);

    async function fetchData(userId) {
        const response = await apiClient.get(`/clicks/referrers/user/${userId}`);
        setData(response.data);
    }
    return (
        <>
            <AuthenticatedNavbar />
            <main>
                <div className="container m-5 mx-auto">
                    <div className="row">
                        <div className="col">
                            <h4 className="pb-3">Referrers</h4>
                            <p className="fw-lighter">
                                Below are the referrers from which your shortened links were clicked from.
                                Clicks from unknown sources are marked as Other.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col border">
                            <div className="table-responsive">
                                <table className="table table-hover my-4">
                                    <thead>
                                        <tr>
                                            <th scope="col">Referrer</th>
                                            <th scope="col">Clicks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-lighter">
                                        {data?.map((d) => (
                                            <tr>
                                                <td><a href={d.referrer} className="fw-lighter text-white">
                                                    <u>{d.referrer}</u>
                                                </a></td>
                                                <td>{d.clickCount}</td>
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

export default Referrer;