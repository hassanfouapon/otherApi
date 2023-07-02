
const { sendMail } =require('./utils/mails')


module.exports.envoiMessage = async (req, res, next) => {
    
    const { email, name, message } = req.body
    console.log(req.body);
    // console.log("ctrl======"+email);
    const mailOptions = {
        // from: `${email}`,
        to: `info@mickmaq.com`,
        subject: `Message from : ${name}`,
        text: `hello we have a new message of ${name} from the email adress ${email} whose message content is as follows: \n  \n \n \n  ${message} `,
      //  html: ``
    }
    try {
        sendMail(mailOptions)
        res.json({ message:message , status: true })
    } catch (error) {
        console.log(error);
        res.json({ error: "erreur survenue veiller reessayer", status: false })
    }
}