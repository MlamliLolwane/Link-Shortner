import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";

function AddLink() {
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
                            <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-0" id="originaLink" />
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