import { useState } from "react";
import { useNavigate } from "react-router";
import apiClient from "../apiClient";
import RegistrationConfirmation from "./RegistrationConfirmation";

function RegisterModal() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        document.getElementById("closeRegisterModal").click();
        try {
            const response = await apiClient.post('/register', { userName: userName });
            localStorage.setItem('userId', response.data.id);
            //document.getElementById("hiddenMobileCall").click();
        } catch (error) {
            console.log(error);
        }
        //navigate('/authenticated/home');
    }
    return (
        <>
            <RegistrationConfirmation />
            <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">REGISTER</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fw-lighter">
                            <p>Welcome to the Link Shortner demo. Register with a username and the system will automatically log you in.
                                If you have already registered, then click on the Login link below.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control form-control-sm rounded-0" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                    <label for="originaLink">Enter Username</label>
                                </div>
                                <button type="button" className="nav-link pe-3 pb-3 mx-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                                    <u>Already registered? Login </u>
                                </button>
                                <div className="text-center mb-2">
                                    <button type="button" className="d-none"
                                        data-bs-toggle="modal" data-bs-target="#confirmationModal" id="hiddenMobileCall">
                                        Hidden
                                    </button>
                                    <button type="button" className="btn btn-secondary rounded-0" data-bs-dismiss="modal" id="closeRegisterModal">CLOSE</button>
                                    <button type="submit" className="btn btn-primary ms-4">REGISTER</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default RegisterModal;
