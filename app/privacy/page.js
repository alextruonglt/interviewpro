import React from "react"
import Header from "../dashboard/_components/Header"
import Footer from "@/components/Footer"

const PrivacyPolicy = () => {
	return (
		<>
			<Header />
			<div className="max-w-4xl mx-auto px-6 py-12">
				<h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
				<p className="text-gray-600 mb-4">
					Effective Date: December 18th, 2024 <br />
					Last Updated: December 18th, 2024
				</p>
				<p className="text-gray-700 mb-6">
					Welcome to <strong>InterviewPro</strong>! Your privacy is critically
					important to us. This Privacy Policy explains how we collect, use, and
					protect your information when you use our services.
				</p>

				<h2 className="text-2xl font-bold mt-8 mb-4">
					1. Information We Collect
				</h2>
				<ul className="list-disc list-inside space-y-2 text-gray-700">
					<li>
						<strong>Personal Information:</strong> Name, email address, and
						other details provided during sign-up.
					</li>
					<li>
						<strong>User Content:</strong> Responses, feedback, and data from
						mock interviews.
					</li>
					<li>
						<strong>Automatically Collected Information:</strong> Device
						information, IP address, and site usage data.
					</li>
				</ul>

				<h2 className="text-2xl font-bold mt-8 mb-4">
					2. How We Use Your Information
				</h2>
				<p className="text-gray-700">
					We use your information to provide and improve our services,
					personalize your experience, and communicate updates or support.
				</p>

				<h2 className="text-2xl font-bold mt-8 mb-4">
					3. Sharing Your Information
				</h2>
				<p className="text-gray-700">
					We do not sell your personal information. However, we may share it
					with trusted service providers for hosting, analytics, or legal
					requirements.
				</p>

				<h2 className="text-2xl font-bold mt-8 mb-4">4. Cookie Policy</h2>
				<p className="text-gray-700">
					<strong>What Are Cookies?</strong> Cookies are small text files stored
					on your device to enhance your experience. We use:
				</p>
				<ul className="list-disc list-inside space-y-2 text-gray-700">
					<li>
						<strong>Essential Cookies:</strong> For site functionality.
					</li>
					<li>
						<strong>Performance Cookies:</strong> To understand how users
						interact with our site.
					</li>
					<li>
						<strong>Marketing Cookies:</strong> For personalized promotions.
					</li>
				</ul>
				<p className="text-gray-700 mt-4">
					You can manage or disable cookies through your browser settings.
				</p>

				<h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
				<p className="text-gray-700">
					Depending on your location, you may have rights to access, update, or
					delete your data. Contact us at{" "}
					<a href="mailto:contact@interviewpro.com" className="text-blue-600">
						contact@interviewpro.com
					</a>{" "}
					to exercise your rights.
				</p>

				<h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
				<p className="text-gray-700">
					For questions about this policy, please contact us:
				</p>
				<address className="not-italic text-gray-700 mt-2">
					<strong>InterviewPro</strong>
					<br />
					Email:{" "}
					<a href="mailto:contact@interviewpro.com" className="text-blue-600">
						contact@interviewpro.com
					</a>
				</address>
			</div>
			<Footer />
		</>
	)
}

export default PrivacyPolicy
