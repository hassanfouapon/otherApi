const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: true,
    auth: {
        user: "alertnebula8@gmail.com",
        pass: "eevlfdjfentbhwqy"
        // pass: "iahwrubvrghlvbmt"
    }
})

module.exports.sendMail = (mailOptions)=>{
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
        }else{
            console.log(` Email sent: ${info.response}`);
        }
    })
}