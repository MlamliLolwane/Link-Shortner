import Navbar from "../components/Navbar";
import {useState, useEffect} from 'react';

function Contact() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch('contact.json');
        const jsonRes = await response.json();
        setData(jsonRes);
    }

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
                        <i class="bi bi-envelope-at-fill"></i> Email: <a href={data?.email}
                            className="fw-lighter d-inline nav-link">
                            <u>{data?.email}</u>
                        </a>
                    </p>
                    <p className="fw-lighter">
                        <i class="bi bi-telephone-forward-fill"></i> Call: <u> {data?.contact} </u> / <u> {data?.alternativeContact} </u>
                    </p>
                    <p className="fw-lighter">
                        <i class="bi bi-linkedin"></i> LinkedIn: <a href={data?.linkedin}
                            target="_blank" className="fw-lighter d-inline nav-link"><u>LinkedIn Profile</u></a>
                    </p>
                    <p className="fw-lighter">
                        <i class="bi bi-github"></i> Github: <a href={data?.github}
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