// Use at least Nodemailer v4.1.0
// import nodemailer from "nodemailer";

// Generate SMTP service account from ethereal.email

// // Create a SMTP transporter object
// const transporter = createTransport({
//   service: "gmail",
//   auth: {
//     user: "webchat.chat@gmail.com",
//     pass: "rcarkwpmzrvjkabm",
//   },
// });

// // Message object
// let message = {
//   from: "Sender Name <sender@example.com>",
//   to: "Recipient <recipient@example.com>",
//   subject: "Nodemailer is unicode friendly ✔",
//   text: "Hello to myself!",
//   html: "<p><b>Hello</b> to myself!</p>",
// };

// transporter.sendMail(message, (err, info) => {
//   if (err) {
//     console.log("Error occurred. " + err.message);
//     return process.exit(1);
//   }

//   console.log("Message sent: %s", info.messageId);
//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", getTestMessageUrl(info));
// });
