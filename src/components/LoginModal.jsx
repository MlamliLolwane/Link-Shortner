import { useNavigate } from "react-router";
import apiClient from "../apiClient";
import { useState } from "react";

function LoginModal() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");

    async function login(e) {
        e.preventDefault();
        document.getElementById("closeModal").click();
        const response = await apiClient.get(`login/${userName}`);
        localStorage.setItem('userId', response.data.id);
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
                            <p>Enter the username you used to register on the system in order to login and access your information.
                                If you have not registered, click on the register link below.
                            </p>
                            <form onSubmit={login}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control form-control-sm rounded-0" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                    <label for="originaLink">Enter Username</label>
                                </div>
                                <button type="button" className="nav-link pe-3 pb-3 mx-auto" data-bs-toggle="modal" data-bs-target="#registerModal">
                                    <u>No account? Register</u>
                                </button>
                                <div className="text-center mb-4">
                                    <button type="button" className="btn btn-secondary rounded-0" data-bs-dismiss="modal" id="closeModal">CLOSE</button>
                                    <button type="submit" className="btn btn-primary ms-4">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default LoginModal;