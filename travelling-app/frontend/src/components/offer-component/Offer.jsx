import image1 from "../../assets/image/title-icon (1).svg";
import "./Offer.css"
function Offer() {
  return (
    <div>
      <div className="offer-container">
        <div className="offer-content">
          <h2 className="offer-heading">Prepare Yourself & Let's Explore</h2>
          <div className="middle-heading">
            <h2 className="offer-middle-heading">The Beauty Of The World</h2>
            <img src={image1} alt="loading" />
          </div>
          <p className="offer-para">
            We have many special offers specially for you.
          </p>
          <button className="offer-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
