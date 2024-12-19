import nodemailer from "nodemailer"

export async function POST(req) {
	try {
		const { name, email, message } = await req.json()

		// Validation
		if (!name || !email || !message) {
			return new Response(
				JSON.stringify({ message: "All fields are required" }),
				{ status: 400 }
			)
		}

		// Configure nodemailer transport
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com", // Your SMTP server
			port: 465, // For Gmail
			secure: true, // Use TLS
			auth: {
				user: process.env.SMTP_USER, // Your email address
				pass: process.env.SMTP_PASS, // Your email password or app password
			},
		})

		// Send email to the user
		await transporter.sendMail({
			from: `"InterviewPro Support" <${process.env.SMTP_USER}>`, // Your email address
			to: email, // Send to the user's email
			subject: `Thank you for contacting InterviewPro, ${name}`,
			text: `Dear ${name},\n\nThank you for reaching out to us. Here is a copy of your message:\n\n${message}\n\nOur team will get back to you shortly.\n\nBest regards,\nThe InterviewPro Team`,
			html: `<p>Dear ${name},</p><p>Thank you for reaching out to us. Here is a copy of your message:</p><blockquote>${message}</blockquote><p>Our team will get back to you shortly.</p><p>Best regards,<br>The InterviewPro Team</p>`,
		})

		// Send email to your team (optional)
		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: "contact@interviewpro.com", // Your team's email address
			subject: `Contact Form Submission from ${name}`,
			text: message,
			html: `<p>${message}</p>`,
		})

		return new Response(
			JSON.stringify({ message: "Email sent successfully" }),
			{
				status: 200,
			}
		)
	} catch (error) {
		console.error("Error sending email:", error)
		return new Response(
			JSON.stringify({ message: "Failed to send email", error: error.message }),
			{
				status: 500,
			}
		)
	}
}
