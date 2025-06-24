import { useNavigate } from "react-router";

function RegistrationConfirmation() {
    const navigate = useNavigate();

    function proceed()
    {
        document.getElementById("closeModalDialog").click();
        navigate('/authenticated/home');
    }
    return (
        <>
        <div className="modal fade" data-bs-backdrop="static" id="confirmationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">REGISTRATION SUCCESSFUL</h1>                      
                    </div>
                    <div className="modal-body fw-lighter">
                        Registration was successful and the application has automatically logged you in. Click on the PROCEED button below to continue.
                    </div>
                    <div className="mx-auto mb-4">         
                        <button type="button" className="d-none" data-bs-dismiss="modal" id="closeModalDialog">CLOSE</button>               
                        <button type="button" className="btn btn-primary ms-4" onClick={proceed}>PROCEED</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default RegistrationConfirmation;