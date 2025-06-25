import { useNavigate } from "react-router";

function LogoutModal() {
    const navigate = useNavigate();

    function logout()
    {
        localStorage.removeItem('userId');
        document.getElementById("closeModal").click();
        navigate('/');
    }
    return (
        <>
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">LOGOUT</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body fw-lighter">
                        This is a demo application and user information was automatically generated for you. 
                        By logging out all the data you entered will be lost.
                    </div>
                    <div className="mx-auto mb-4">
                        <button type="button" className="btn btn-secondary rounded-0" data-bs-dismiss="modal" id="closeModal">CLOSE</button>
                        <button type="button" className="btn btn-primary ms-4" onClick={logout}>LOGOUT</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default LogoutModal;