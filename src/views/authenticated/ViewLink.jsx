import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";

function ViewLink() {
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
                                
                                Original Link: <a href="https://github.com/MlamliLolwane" className="fw-lighter text-white">
                                    <u>https://github.com/MlamliLolwane</u>
                                </a>
                            </p>

                            <p className="fw-lighter">
                                Shortened Link: <a href="https://sht.ly/txldat" className="fw-lighter text-white">
                                    <u>https://sht.ly/txldat</u>
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
                                    <tr>
                                        <td><a href="https://github.com" className="fw-lighter text-white">
                                            <u>https://github.com</u>
                                        </a></td>
                                        <td>17</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://youtube.com" className="fw-lighter text-white">
                                            <u>https://youtube.com</u></a></td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://instagram.com" className="fw-lighter text-white">
                                            <u>https://instagram.com</u></a></td>
                                        <td>24</td>
                                    </tr>
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