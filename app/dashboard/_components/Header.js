"use client"
import React from "react"
import Image from "next/image"
import { UserButton, useUser } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const Header = () => {
	const { isSignedIn } = useUser()
	const path = usePathname()
	const router = useRouter()

	return (
		<div className="flex items-center justify-between px-8 py-4 bg-secondary shadow-sm">
			{/* Logo and Title */}
			<div
				className="flex items-center gap-3 cursor-pointer flex-shrink-0"
				onClick={() => router.push("/")}
			>
				<Image src={"/logo.svg"} width={50} height={50} alt="logo" />
				<h1 className="text-lg font-extrabold text-slate-800">InterviewPro</h1>
			</div>

			{/* If logged in, show navigation links */}
			{isSignedIn ? (
				<ul className="flex-1 hidden md:flex gap-8 justify-center text-center">
					<li
						className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
							path == "/dashboard" && "text-primary font-bold"
						}`}
						onClick={() => router.push("/dashboard")}
					>
						Dashboard
					</li>
					<li
						className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
							path == "/questions" && "text-primary font-bold"
						}`}
						onClick={() => router.push("/questions")}
					>
						Questions
					</li>
					<li
						className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
							path == "/upgrade" && "text-primary font-bold"
						}`}
						onClick={() => router.push("/upgrade")}
					>
						Upgrade
					</li>
					<li
						className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
							path == "/howitworks" && "text-primary font-bold"
						}`}
						onClick={() => router.push("/howitworks")}
					>
						How It Works
					</li>
				</ul>
			) : (
				// If not logged in, show Log in / Create account button
				<Button
					className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all"
					onClick={() => router.push("/sign-in")}
				>
					Log in / Create account
				</Button>
			)}

			{/* If logged in, show the UserButton */}
			{isSignedIn && (
				<div className="flex-shrink-0">
					<UserButton />
				</div>
			)}
		</div>
	)
}

export default Header
