import nodemailer from "nodemailer"
//import "dotenv/config"

const host = process.env.SMTP_HOST
const port = process.env.SMTP_PORT
const user = process.env.SMTP_USER
const pass = process.env.SMTP_PASS

console.log("host:", host)
const fromEmail = "support@hacklab.solutions"
const toEmail = "sebin@hacklab.solutions"


const getTransporter = () => {
	const transporter = nodemailer.createTransport({
		host,
		port,
		secure: false,
		auth: {
			user,
			pass
		}
	})
	return transporter
}

const sendMail = (transporter, mailOptions) => {
	transporter.sendMail(mailOptions, (err, info) => {
		if(err) {
			console.error("Error sending email:", err)
		} else {
			console.log("Email sent:", info.response)
		}
	})
}

const transporter = getTransporter()
const mailOptions = {
	from: fromEmail,
	to: toEmail,
	subject: "Test email",
	text: "This is a test email"
}

sendMail(transporter, mailOptions)
