const sgMail = require('@sendgrid/mail')

export default async function (req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)

	const { email, message } = req.body

	const content = {
		to: 'vinni.hoke@gmail.com',
		cc: 'hq@hokecreative.com',
		from: email,
		subject: `New Message From - ${email}`,
		text: message,
		html: `<h1>${message}</h1>`
	}

	try {
		await sgMail.send(content)
		res.status(200).send('Message sent successfully.')
	} catch (error) {
		console.log('ERROR', error)
		res.status(400).send('Message not sent.')
	}
}