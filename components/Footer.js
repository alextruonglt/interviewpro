import React from "react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
	return (
		<footer className="border-t border-slate-200 bg-slate-50">
			<div className="px-8 py-6 mx-auto max-w-7xl flex flex-col items-center gap-4">
				<div className="flex items-center gap-4">
					<Link
						href="/"
						aria-current="page"
						className="flex items-center gap-2"
					>
						<Image
							src={"/logo.svg"}
							width={40}
							height={40}
							alt="logo"
							className="cursor-pointer"
						/>
						<strong className="text-lg font-extrabold tracking-tight text-slate-800">
							InterviewPro
						</strong>
					</Link>
				</div>
				<div className="flex items-center gap-8 text-lg font-medium text-slate-700">
					<Link href="/#pricing" className="hover:text-slate-900">
						Pricing
					</Link>
					<a
						href="mailto:contact@interviewpro.com"
						className="hover:text-slate-900"
					>
						Support
					</a>
					<Link href="/tos" className="hover:text-slate-900">
						Terms of Service
					</Link>
					<Link href="/privacy-policy" className="hover:text-slate-900">
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
