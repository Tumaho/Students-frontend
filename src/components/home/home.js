import Header from "../header/header";
import { Footer } from "../footer/footer";
import Students from "../students/students"
import './home.css'
function Home() {
  return (
    <>
      <Header></Header>
      <div className="mainDiv">
        <div className="card">
          <img src="https://storage.googleapis.com/alghad-media/2021/07/210704_ASAC_ServerBannerDiscord_03a.png" />
          <div className="card-body">
            <h2>Students</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>author</h5>
          </div>
        </div>

        <div className="card">
          <img src="https://media-exp1.licdn.com/dms/image/C4E22AQGP-kMFkz10Zg/feedshare-shrink_2048_1536/0/1651406434742?e=1656547200&v=beta&t=LRZ9lBfzBWiDF4UJtZiGWPhQhwSrGg0YbKLKtXpGA18" />
          <div className="card-body">
            <h2>Teachers Assistant</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>author</h5>
          </div>
        </div>
      </div>
      <Footer></Footer>
      {/* <Students></Students> */}
    </>
  );
}

export default Home;
