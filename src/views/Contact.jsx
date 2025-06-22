import Navbar from "../components/Navbar";

function Contact() {
    return (
        <>
            <Navbar />
            <main className="ms-0">
                <div className="border m-5 p-4">
                    <h4>Contact</h4>
                    <p className="fw-lighter">
                        I am actively job seeking so if you like what you see and want to get in touch with
                        me then you can reach me through one of the following channels:
                    </p>
                    <p className="fw-lighter">
                        <i class="bi bi-envelope-at-fill"></i> Email: <a href="mailto:mrlolwane96@gmail.com"
                            className="fw-lighter d-inline nav-link">
                            <u>mrlolwane96@gmail.com</u>
                        </a>
                    </p>
                    <p className="fw-lighter">
                        <i class="bi bi-telephone-forward-fill"></i> Call: <u> 072 9252 248 </u> / <u> 067 1974 979 </u>
                    </p>
                    <p className="fw-lighter">
                        <i class="bi bi-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/mlamli-lolwane-3ba96b196/"
                            target="_blank" className="fw-lighter d-inline nav-link"><u>LinkedIn Profile</u></a>
                    </p>
                    <p className="fw-lighter">
                        <i class="bi bi-github"></i> Github: <a href="https://github.com/MlamliLolwane"
                            target="_blank" className="fw-lighter d-inline nav-link"><u>Github Profile</u></a>
                    </p>
                </div>
                <div className="border-top">
                    <p className="fw-ligter py-4 text-center">
                        Made with <i class="bi bi-heart-fill"></i> by Mlamli Lolwane
                    </p>
                </div>
            </main>
        </>
    );
}

export default Contact;