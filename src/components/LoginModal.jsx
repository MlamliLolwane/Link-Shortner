import { useNavigate } from "react-router";

function LoginModal() {
    const navigate = useNavigate();

    function login()
    {
        navigate('/authenticated/home');
    }
    return (
        <>
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">LOGIN</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body fw-lighter">
                        For this demo application, the application will generate user credentials and automatically
                        log you in to be able to access the protected routes. Just click the LOGIN button below.
                    </div>
                    <div className="mx-auto mb-4">
                        <button type="button" className="btn btn-secondary rounded-0" data-bs-dismiss="modal">CLOSE</button>
                        <button type="button" className="btn btn-primary ms-4" onClick={login}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default LoginModal;