"use client"
import { Button } from "@/components/ui/button"
import { ImageMinus } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {
	const router = useRouter()
	return (
		<main className="flex flex-col hero_bg_color min-h-screen">
			{/* Hero Section */}
			<div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
				<div className="text-center p-10 bg-white rounded-lg shadow-xl">
					<h1 className="text-4xl font-extrabold text-gray-800 mb-4">
						Ace Your Next Interview
					</h1>
					<p className="text-gray-700 mb-6">
						Master your interview skills with tailored practice and expert
						guidance.
					</p>
					<Button
						onClick={() => router.push("/dashboard")}
						className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700"
					>
						Create Free Account
					</Button>
				</div>
			</div>

			{/* Features Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-6xl mx-auto px-5">
					<h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
						Why Choose Us?
					</h2>
					<div className="grid md:grid-cols-3 gap-10">
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<h3 className="text-xl font-bold text-gray-800 mb-4">
								Personalized Practice
							</h3>
							<p className="text-gray-600">
								Get customized mock interviews tailored to your dream job.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<h3 className="text-xl font-bold text-gray-800 mb-4">
								Expert Insights
							</h3>
							<p className="text-gray-600">
								Learn from industry professionals with real-world experience.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<h3 className="text-xl font-bold text-gray-800 mb-4">
								Success Tracking
							</h3>
							<p className="text-gray-600">
								Monitor your improvement and get actionable feedback.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="bg-blue-600 py-10">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-extrabold text-white mb-4">
						Ready to Land Your Dream Job?
					</h2>
					<p className="text-white mb-6">
						Sign up today and start practicing for free.
					</p>
					<Button className="px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-lg hover:bg-gray-200">
						Get Started Now
					</Button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800 py-6">
				<div className="max-w-6xl mx-auto px-5 text-center text-white">
					<p>
						&copy; {new Date().getFullYear()} Ace Interviews. All rights
						reserved.
					</p>
				</div>
			</footer>
		</main>
	)
}
