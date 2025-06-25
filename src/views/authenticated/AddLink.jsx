import { useState } from "react";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import apiClient from "../../apiClient";
import { useNavigate } from "react-router";

function AddLink() {
    const [originalUrl, setOriginalUrl] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        await apiClient.post('/link', {originalUrl: originalUrl, userId: localStorage.getItem('userId')});
        navigate("/authenticated/links");
    }
    return (
        <>
            <AuthenticatedNavbar />
            <main>
                <div className="container m-5 mx-auto">
                    <div className="row">
                        <div className="col">
                            <h4 className="pb-3">Shorten Link</h4>
                            <p className="fw-lighter">
                                Use the form below to shorten your link. You can shorten as many links as
                                you want.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="url" className="form-control rounded-0" id="originalUrl" 
                                    value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} required/>
                                    <label for="originaLink">Enter link to shorten</label>
                                </div>
                                <button type="submit" className="btn btn-primary">SHORTEN LINK</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AddLink;