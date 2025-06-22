import Navbar from "../components/Navbar";

function About() {
    return (
        <>
            <Navbar />
            <main className="ms-0">
                <div className="border m-5 p-4">
                    <h4>About</h4>
                    <p className="fw-lighter">
                        This project is a simple to do application where by users can create a to do item by inputing the
                        title of the task they have to complete and then add a description as well. Then users can mark the
                        status of the task (Complete / Cancelled).
                    </p>
                    <h6>Technologies Used</h6>
                    <p className="fw-lighter">
                        This project is made up of 2 "sub-projects", a backend built with Laravel 12 and a frontend built with
                        ReactJS. The database used for the project is MySQL. The backend is hosted on a Google Cloud Engine instance
                        while the frontend is hosted on Versel.
                    </p>

                    <p className='fw-lighter'>
                        Code for both projects can be found on the following links: <br />
                        <u><a href='#' className="fw-lighter">Laravel Backend</a></u> and <u><a href='#' className="fw-lighter">ReactJS Frontend</a></u>
                    </p>

                    <h6>Entity Relationship Diagram</h6>
                    <p className='fw-lighter'>
                        Below is an ERD of the application showcasing the app's database schema. A code first approach
                        was used for building the application.
                    </p>
                    <img src="public\erd.png" className="img-fluid" alt="Entity Relationship Diagram"></img>
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

export default About;