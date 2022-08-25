import emailjs from "emailjs-com";

export const sendMail = ({ template, data }) => {
  return emailjs.send("service_w11xdz4", template, data, "FrAnSWFNqAvOexkgG").then(
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
