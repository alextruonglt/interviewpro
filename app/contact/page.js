"use client"
import React, { useState } from "react"
import Header from "../dashboard/_components/Header"
import Footer from "@/components/Footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSuccessMessage("")
		setErrorMessage("")

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setSuccessMessage("Your message has been sent successfully!")
				setFormData({
					name: "",
					email: "",
					message: "",
				})
			} else {
				throw new Error("Failed to send message.")
			}
		} catch (error) {
			setErrorMessage(error.message || "Something went wrong.")
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<>
			<Header />
			<div className="max-w-4xl mx-auto px-6 py-12">
				<h1 className="text-4xl font-bold mb-6 text-center text-slate-800">
					Contact Us
				</h1>
				<p className="text-gray-600 text-center mb-8">
					We'd love to hear from you! Please fill out the form below and we'll
					get back to you as soon as possible.
				</p>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-6 border border-slate-200 rounded-lg p-8 shadow-lg bg-white"
				>
					<div>
						<label htmlFor="name" className="text-slate-600 font-medium">
							Name
						</label>
						<Input
							id="name"
							name="name"
							type="text"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							required
							className="mt-1"
						/>
					</div>
					<div>
						<label htmlFor="email" className="text-slate-600 font-medium">
							Email
						</label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							required
							className="mt-1"
						/>
					</div>
					<div>
						<label htmlFor="message" className="text-slate-600 font-medium">
							Message
						</label>
						<Textarea
							id="message"
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							required
							className="mt-1"
						/>
					</div>
					<div className="flex justify-center">
						<Button type="submit" disabled={isSubmitting} className="w-full">
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</div>
					{successMessage && (
						<p className="text-center text-green-600">{successMessage}</p>
					)}
					{errorMessage && (
						<p className="text-center text-red-600">{errorMessage}</p>
					)}
				</form>
			</div>
			<Footer />
		</>
	)
}

export default ContactPage
