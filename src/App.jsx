import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="border d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
          <div>
            <div>
              <h4 className="text-center">
                WELCOME TO LINK SHORTNER
              </h4>
              <p className="fw-lighter text-center px-3">
                You can use this service to shorten your links. <br />
                Links shortened before logging in will be stored in a cookie and
                will be erased when you delete cookies.
              </p>
              <form>
                <div className="form-floating mb-3 mx-3">
                  <input type="email" className="form-control rounded-0" id="originaLink" />
                  <label for="originaLink">Enter link to shorten</label>
                </div>
                <button type="submit" className="btn btn-primary ms-3">SHORTEN LINK</button>
              </form>
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
                  i.e. take a longer link <u>https://github.com/MlamliLolwane</u>and shorten it to
                  something along the lines of <u>https://bbd.ly/abcdef </u>. The actual "shortened" link will
                  be longer since I am using a free domain provided by vercel. This is just proof of
                  concept on how the application will work when I have a shorter domain like <u> https://bbd.ly </u>

                  <br /><br />You can watch the video below to see how the application works or just explore it yourself.
                </p>
                <div className="video-container">
                  <iframe
                    width="700"
                    height="315"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
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
