const nodeMailer = require("nodemailer");
const stripTags = require("striptags");
const fetch = require("node-fetch");

exports.handler = async (e) => {
  const { email, company, fullname, inquery, message, recaptcha } = JSON.parse(
    e.body
  );

  const errors = [];
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let alphaNumeric = /^[\w\-\s]+$/;

  if (recaptcha === undefined || recaptcha === null || recaptcha === "") {
    return {
      statusCode: 401,
      body: JSON.stringify({ status: "failed", errors: "Invalid recaptcha" }),
    };
  }

  if (
    email === undefined ||
    company === undefined ||
    fullname === undefined ||
    inquery === undefined ||
    message === undefined
  ) {
    return {
      statusCode: 401,
      body: JSON.stringify({ status: "failed", errors: "undefined field(s)" }),
    };
  }
  if (
    email.trim() === "" ||
    company.trim() === "" ||
    fullname.trim() === "" ||
    inquery.trim() === "" ||
    message.trim() === ""
  ) {
    errors.push("all fields are required");
  }

  if (!email.match(regexEmail)) {
    errors.push("must provide a valid email adress");
  }

  if (
    !fullname.match(alphaNumeric) ||
    !inquery.match(alphaNumeric) ||
    !company.match(alphaNumeric)
  ) {
    errors.push("fields must only contain alphanumeric characters");
  }

  if (
    fullname.length > 200 ||
    email.length > 200 ||
    inquery.length > 200 ||
    company.length > 200
  ) {
    errors.push("fields must be less than 200 characters");
  }

  if (message.length > 500) {
    errors.push("message must be less than 500 characters");
  }

  let secretKey = process.env.RECAPTCHA_SECRET_KEY;

  await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`,
    { method: "POST" }
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.success) {
        errors.push("Invalid server Recaptcha");
      }
    })
    .catch((err) => {
      errors.push(err);
    });

  if (errors.length > 0) {
    return {
      statusCode: 401,
      body: JSON.stringify({ status: "failed", errors }),
    };
  }

  const sanMessage = stripTags(message);

  const transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Email from profolio about ${inquery}`,
      html: `
      From: ${email} </br>
      Full Name: ${fullname} </br>
      Company: ${company} </br>
      Inquiry: ${inquery} </br>
      Message: ${sanMessage}`,
    });

    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: `Received confirmation`,
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Reception comfirmation</title>
          <style>
            @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
            * {
              box-sizing: border-box;
            }
            body {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              font-family: "Montserrat", sans-serif;
            }
            main {
              background-color: #fbfbfb;
      
              width: 100%;
              box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.08);
      
              padding: 20px;
            }
      
            h1 {
              width: 60%;
              font-size: 28px;
              text-align: center;
              margin: 0 auto 40px auto;
            }
            p {
              width: 80%;
              font-size: 12px;
              font-weight: 300;
              margin: 0 auto 40px auto;
            }
      
            strong {
              text-transform: capitalize;
              color: #6c63ff;
            }
      
            .svg {
              height: 25px;
              display: inline-block;
            }
      
            .svg img {
              height: 100%;
            }
      
            footer {
              border-top: 1px solid rgba(0, 0, 0, 0.151);
              width: 60%;
              margin: 0 auto;
              padding-top: 20px;
              margin-top: 60px;
            }
            small {
              font-size: 8px;
              font-weight: 300;
              text-align: center;
              display: block;
              margin-top: 20px;
            }

            footer .container {
              width: fit-content;
              margin: 0 auto;
            }
      
            @media screen and (max-width: 350px) {
              h1 {
                font-size: 26px;
              }
            }
          </style>
        </head>
        <body>
          <main>
            <h1>Your Email has been successfully sent <strong>!</strong></h1>
            <p>
              Hi <strong>${fullname}</strong>, thank you for completing the inquiry form.
              This email is being sent to comfirm that i've received your inquiry
              about <strong>${inquery}</strong> and we will be in touch soon.
            </p>
            <p>Best regards.</p>
            <footer>
            <div class="container">
              <div class="svg">
                <a href="https://github.com/mybeon" target="_blank" rel="noreferrer">
                  <img src="https://i.postimg.cc/BjmZfCWk/github.png" alt="" />
                </a>
              </div>
              <div class="svg">
                <a href="${process.env.URL}" target="_blank" rel="noreferrer">
                <img src="https://i.postimg.cc/mzHTMfcW/link.png" alt="" />
                </a>
              </div>
            </div>
            </footer>
            <small>Copyright &copy; 2021. All Rights Reserved.</small>
          </main>
        </body>
      </html>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "succes" }),
    };
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ status: "failed", err }),
    };
  }
};
