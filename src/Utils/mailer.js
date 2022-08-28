import emailjs from "emailjs-com";

export const sendMail = ({ template, data }) => {
  return emailjs
    .send(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      template,
      data,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY
    )
    .then(
      function (response) {
        return { status: true, message: response };
        // console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        return { status: false, message: error };
        // console.log("FAILED...", error);
      }
    );
};
