import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";

function AuthenticatedAbout() {
    return (
        <>
            <AuthenticatedNavbar />
            <main className="ms-0">
                <div className="border m-5 p-4">
                    <h4>About</h4>
                    <p className="fw-lighter">
                        This project serves to demonstrate a link shortening service that takes long urls
                        like <u>https://github.com/MlamliLolwane</u> and shortens them to <u>https://sho.rt/txlspgdw</u>. <br /> <br />

                        You will see as you demo the project that the links are not actually being shortened to a url
                        that starts with <u>https://sho.rt</u> and this is because I do not own that url and this is just
                        a demonstration of how the project would actually work. <br /> <br />

                        Apart from being a link shortening service, this projects also serves to demonstrate my abilities
                        to not only build systems that collect data,
                        but also produce accurate, meaningful as well as insightful information in the form of reports as you will see when viewing the analytics of
                        your "shortened" links.
                    </p>
                    <h6>Technologies Used</h6>
                    <p className="fw-lighter">
                        This project is made up of 2 "sub-projects", a controller-based web API with ASP.NET Core for the backend and a frontend built with
                        ReactJS. The database used for the project is MySQL. The backend is hosted on a Google Cloud Engine instance
                        while the frontend is hosted on Versel.
                    </p>

                    <p className='fw-lighter'>
                        Code for both projects can be found on the following links: &nbsp;
                        <u><a href='https://github.com/MlamliLolwane/Link-Shortner-API' className="fw-lighter" target="_blank">
                            ASP.NET Core Backend</a></u> and <u><a href='https://github.com/MlamliLolwane/Link-Shortner' 
                            className="fw-lighter" target="_blank">ReactJS Frontend</a></u>
                    </p>

                    <h6>Entity Relationship Diagram</h6>
                    <p className='fw-lighter'>
                        Below is an ERD of the application showcasing the app's database schema. A code first approach
                        was used for building the application.
                    </p>
                    <img src="/erd.png" className="img-fluid" alt="Entity Relationship Diagram"></img>
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

export default AuthenticatedAbout;