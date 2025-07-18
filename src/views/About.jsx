import Navbar from "../components/Navbar";

function About() {
    return (
        <>
            <Navbar />
            <main className="ms-0">
                <div className="border m-5 p-4">
                    <h4>About</h4>
                    <p className="fw-lighter">
                        This project serves to demonstrate a link shortening service that takes long urls 
                        like <u>https://github.com/MlamliLolwane</u> and turns them to shorter urls like <u>https://sho.rt/txlspgdw.</u> <br/> <br/>

                        It is worth mentioning that the links are not actually being shortened to a url 
                        that starts with <u>https://sho.rt</u> due to the reason that I do not own thae domain and this is just
                        a demonstration of how the project would actually work. <br/> <br/>

                        Apart from being a link shortening service, this projects also serves to demonstrate my abilities 
                        to not only build systems that collect data,
                        but also produce accurate, meaningful, as well as insightful information in the form of reports when viewing the analytics of
                        the "shortened" links.
                    </p>
                    <h6>Technologies Used</h6>
                    <p className="fw-lighter">
                        This project is made up of 2 "sub-projects", an ASP.NET Core controller-based web API backend and a frontend built with
                        ReactJS. The database used for the project is MySQL. The backend is hosted on a Google Cloud Engine compute instance
                        while the frontend is hosted on Vercel.
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

export default About;
