
// import nodemailer from 'nodemailer';

// const sentMail = async (to,subject,html) => {
//     const transporter = nodemailer.createTransport({
//         host : 'smtp.gmail.com',
//         auth : {
//             user : process.env.MAIL_ID,
//             pass : process.env.MAIL_PASS
//         },
//     });
//     await transporter.sendMail({
//         from : `project 1<${process.env.MAIL_ID}>`,
//         to,
//         subject,
//         html
//     })
// }

// export default sentMail

// 


import nodemailer from "nodemailer";

// send a mail with define transporter object {
const sentMail = async (to,subject,html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user : 'sajibshikder78971@gmail.com',
       pass : 'emdzouppcpbtbhxe'
      },
    });

    
    const mailOptions = {
      from: '"DOCCURE"',
      to : to,
      subject : subject,
      text: "DOCCURE",
      html : html,
     
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(`This message from sendEmail ${error.message}`);
    throw error;
  }
};

export default sentMail;