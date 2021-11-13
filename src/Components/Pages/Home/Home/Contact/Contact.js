import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h2 className="fs-1 fw-bold text-center">
        <span style={{ color: "red" }}>Contact</span> Us
      </h2>
      <div className="row m-5 g-3">
        <div className="form-contact m-3 p-5 text-blue-700 font-semibold col-lg-5 col-md-12 px-3 mb-3">
          <p className="form-label">
            <label htmlFor="">Name:</label>
          </p>
          <p>
            <input
              placeholder="Your Name"
              className="input-field border-2"
              type="text"
              name=""
              id=""
            />
          </p>

          <p className="form-label">
            <label htmlFor="">Email:</label>
          </p>
          <p>
            <input
              className="input-field  border-2"
              type="email"
              placeholder="Your Email"
              name=""
              id=""
            />
          </p>

          <p className="form-label">
            <label htmlFor="">Message:</label>
          </p>
          <p>
            <textarea
              placeholder="Your Messages"
              className="input-field  border-2"
              type="text"
              name=""
              id=""
            />
          </p>

          <button
            className="rounded bg-primary px-3 py-1 text-white border-0 mb-3"
            type="submit"
          >
            Submit
          </button>
          <p>*Thanks in advance for contact us*</p>
          <p>***We will reply ASAP***</p>
        </div>
        <div className="address m-3 text-2xl text-blue-500 p-5 col-lg-5 col-md-12 mb-3">
          <h4>Address:</h4>
          <p>House No. 64/p</p>
          <p>Vaina more,</p>
          <p>Magura,</p>
          <p>Bangladesh</p>
          <p>Mobile: +88 01765 432 836</p>
          <br />
          <h4>follow us</h4>
          <p>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i> Facebook
            </a>
          </p>
          <p>
            <a
              href="http://github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i> Github
            </a>
          </p>
          <p>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> Linkedin
            </a>
          </p>
          <p>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow"></i> StackOverflow
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
