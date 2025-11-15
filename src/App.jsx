import { useNavigate } from "react-router";
import apiClient from "./apiClient";
import Navbar from "./components/Navbar"
import { useState } from "react";
function App() {
  const navigate = useNavigate();
  const [originalUrl, setOriginalUrl] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();

    let response = await apiClient.post('/link', { originalUrl: originalUrl, userId: 0 });
    const { userId, click, ...filteredLink } = response.data;

    const storedData = localStorage.getItem('links');
    if (storedData) {
      let links = JSON.parse(storedData) || [];
      links.push(filteredLink);
      localStorage.setItem('links', JSON.stringify(links));
    }
    else {
      let arr = [];
      arr.push(filteredLink);
      localStorage.setItem('links', JSON.stringify(arr));
    }
 
    navigate("/links");
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="row border-bottom">
            <div className="col">
              <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', height: '80vh'
              }}>
                <p style={{ fontSize: '90px' }} className='fw-bold text-center'>Link Shortner</p>
                <h3 className='fw-light'>
                  Please register or login to access your links
                  {/* Hi and welcome to Project Nemo. An ethical phishing tool
                  developed by Mlamli Lolwane as part of his portfolio project to demonstrate his
                  information security skills. */}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="pt-5">
                <h4 className="text-center">
                  A BIT OF BACKGROUND
                </h4>
                <p className="fw-lighter text-center">
                  This is a demo application and it's intended to mimic a url shortening service
                  i.e. take a longer link <u>https://github.com/MlamliLolwane</u> and shorten it to
                  something along the lines of <u>https://sho.rt/abcdef </u>. The actual "shortened" link will
                  be longer since I am using a free domain provided by vercel. This is just proof of
                  concept on how the application will work when I have a shorter domain like <u> https://sho.rt </u>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top">
          <p className="fw-ligter py-4 text-center">
            Made with <i class="bi bi-heart-fill"></i> by Mlamli Lolwane
          </p>
        </div>
      </main>
    </>
  )
}

export default App
