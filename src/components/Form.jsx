import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "./lotties/Loader";
import Succes from "./lotties/Succes";

const Form = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [fullname, setFullname] = useState("");
  const [inquery, setInquery] = useState("");
  const [message, setMessage] = useState("");
  const [recaptcha, setRecaptcha] = useState("");
  const [error, setError] = useState([]);
  const [submitState, setSubmiteState] = useState("none");

  function handleSubmit(e) {
    setError([]);
    e.preventDefault();

    if (
      email.trim() === "" ||
      company.trim() === "" ||
      fullname.trim() === "" ||
      inquery.trim() === "" ||
      message.trim() === ""
    ) {
      setError((prevErr) => [...prevErr, "All fields are required"]);
      return;
    }
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
      setError((prevErr) => [...prevErr, "Must enter a valid email."]);
      return;
    }

    if (recaptcha === "") {
      setError((prevErr) => [...prevErr, "Must complete the recaptcha"]);
      return;
    }

    setSubmiteState("loading");

    fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        company,
        fullname,
        inquery,
        message,
        recaptcha,
      }),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        if (data.status === "succes") {
          setSubmiteState("succes");
        } else {
          setSubmiteState("none");
          setError(data.errors);
          console.log(error);
        }
      })
      .catch((err) => console.error(err));
  }
  return (
    <div id="contact" className="section contact-section">
      <h3>
        contact <strong>me</strong>
      </h3>

      <form onSubmit={(e) => handleSubmit(e)} noValidate>
        <div className="input-container">
          <label htmlFor="email">email :</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="type your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="company">company :</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="name of your company"
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="fullname">full name :</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="your full name"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="inquiry">inquiry :</label>
          <select
            name="inquiry"
            id="inquiry"
            onChange={(e) => setInquery(e.target.value)}
          >
            <option value="">choose</option>
            <option value="seo audit">Seo audit</option>
            <option value="website building">Website building</option>
            <option value="website enhancement">Website enhancement</option>
          </select>
        </div>
        <div className="input-container textarea-container">
          <label htmlFor="message">Details :</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="30"
            placeholder="type your message here"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div
          className="input-container textarea-container"
          style={{ display: submitState === "succes" ? "none" : "block" }}
        >
          <ReCAPTCHA
            sitekey="6LctUPIcAAAAADCQhdHyttE6rU8S8efOJSpeBik5"
            onChange={(value) => {
              setRecaptcha(value);
            }}
          />
        </div>

        <div className="input-container">
          <button
            disabled={
              submitState === "loading" || submitState === "succes"
                ? true
                : false
            }
            type="submit"
            style={{
              backgroundColor: submitState === "none" ? "#6c63ff" : "white",
            }}
          >
            {submitState === "none" ? (
              "submit"
            ) : submitState === "loading" ? (
              <Loader />
            ) : (
              <Succes />
            )}
          </button>
        </div>
      </form>
      {error.length > 0 && (
        <div className="errors">
          {error.map((err) => (
            <p>{err}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Form;
