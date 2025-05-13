import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/home.css";

const Eg1 = () => {
  return (
    <div className="position-relative">

  {/* Top Left Icon */}
  <i className="bi bi-meta position-absolute text-primary fs-2 animate-bounce" style={{ top: '10px', left: '10px' }}></i>

  {/* Top Right Icon */}
  <i className="bi bi-youtube position-absolute text-danger fs-2 animate-rotate" style={{ top: '10px', right: '10px' }}></i>

  {/* Bottom Left Icon */}
  <i className="bi bi-linkedin position-absolute text-info fs-2 animate-pulse" style={{ bottom: '10px', left: '10px' }}></i>

  {/* Bottom Right Icon */}
  <i className="bi bi-google position-absolute text-warning fs-2 animate-scale" style={{ bottom: '10px', right: '10px' }}></i>

  {/* ✅ Main Section Here */}
  <div className="text-center mb-5 pt-5">
    {/* Your existing heading and content here */}
  </div>

</div>
  );
};

export default Eg1;
