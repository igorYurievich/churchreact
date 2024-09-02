import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="py-5 text-light" id="footer">
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <p id="titull" className="mt-4 mb-0">&copy; I Baptist Church in Torrevieja.</p>

        <div className="col-6 d-flex justify-content-around container mt-3 py-3">
          <a
            href="https://www.facebook.com/BaptistChurchTorrevieja/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/luzentorrevieja/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCXmt49rfuWxVzN3Soh15MrA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>

        <p id="titull" className="mt-4 mb-0">
          <a
            href="https://www.google.com/maps/place/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C+%D0%95%D0%A5%D0%91+%22%D0%A1%D0%B2%D0%B5%D1%82+%D0%96%D0%B8%D0%B7%D0%BD%D0%B8%22%2F+Iglesia+%22Luz+De+Vida%22/@37.9822748,-0.6714209,17z/data=!4m6!3m5!1s0xd63abf4635afadf:0x8148701558086b2!8m2!3d37.982334!4d-0.668795!16s%2Fg%2F11sx019rc0?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light text-decoration-none"
          >
            C. los Gases, 34, 03182 Torrevieja, Alicante
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
