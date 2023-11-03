import React from "react";
import iconSuccess from "../assets/icon-success.svg";
import { Link, useLocation } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();
  return (
    <div className="success-page">
      <div className="success-table">
        <img className="icon-success" src={iconSuccess} alt="Success image" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <strong>{location.state.email}</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
        <Link className="link-button" to="/">
          Dismiss message
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
