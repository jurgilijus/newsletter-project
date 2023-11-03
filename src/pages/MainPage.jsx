import React, { useState } from "react";
import signUp from "../assets/illustration-sign-up-desktop.svg";
import monileSingUp from "../assets/illustration-sign-up-mobile.svg";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (email === "") {
        setError("The field is left empty");
      } else if (email.includes("@") === false) {
        setError("The email address is not formatted correctly");
      } else {
        navigate("/success", { state: { id: 1, email: email } });
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <div className="main-page-conteiner page-conteiner">
        <div className="content-conteiner">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="aligne-label">
              <label htmlFor="">Email address</label>
              {error === null ? "" : <p className="error">{error}</p>}
            </div>

            <input
              className={error === null ? "" : "error-input"}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@company.com"
            />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>

        <img className="img" src={signUp} alt="sing up img" />
      </div>
      <div className="mobile-conteiner">
        <img className="mobile-img" src={monileSingUp} alt="sing up img" />
      </div>
      <div className="mobile-content-conteiner">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="aligne-label">
            <label htmlFor="">Email address</label>
            {error === null ? "" : <p className="error">{error}</p>}
          </div>

          <input
            className={error === null ? "" : "error-input"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
    </div>
  );
}

export default MainPage;
