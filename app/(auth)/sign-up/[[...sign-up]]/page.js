import React from "react"
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { SignIn, SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
	return (
		<section className="bg-white">
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				{/* Left Section */}
				<section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
					<img
						alt=""
						src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
						className="absolute inset-0 h-full w-full object-cover opacity-80"
					/>

					<div className="hidden lg:relative lg:block lg:p-12">
						<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
							Join InterviewPro and Level Up Your Career
						</h2>
						<p className="mt-4 leading-relaxed text-white/90">
							Create your account, practice mock interviews, and gain confidence
							to succeed in any job interview.
						</p>
					</div>
				</section>

				{/* Right Section */}
				<main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
					<div className="max-w-xl lg:max-w-3xl">
						<div className="relative -mt-16 block lg:hidden">
							<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
								Join InterviewPro
							</h1>
							<p className="mt-4 leading-relaxed text-gray-500">
								Sign up and start practicing mock interviews with detailed
								feedback.
							</p>
						</div>

						{/* Add the afterSignUpUrl prop */}
						<SignUp afterSignUpUrl="/dashboard" />
					</div>
				</main>
			</div>
		</section>
	)
}

export default SignUpPage
