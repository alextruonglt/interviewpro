"use client"
import React from "react"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

const Header = () => {
	const path = usePathname()
	const router = useRouter()
	return (
		<div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
			<Image src={"/logo.svg"} width={50} height={50} alt="logo" />
			<ul className="hidden md:flex gap-6">
				<li
					className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                        ${path == "/dashboard" && "text-primary font-bold"}
                        `}
					onClick={() => router.push("/dashboard")}
				>
					Dashboard
				</li>
				<li
					className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                        ${path == "/questions" && "text-primary font-bold"}
                        `}
				>
					Questions
				</li>
				<li
					className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                        ${path == "/upgrade" && "text-primary font-bold"}
                        `}
				>
					Upgrade
				</li>
				<li
					className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                        ${path == "/howitworks" && "text-primary font-bold"}
                        `}
				>
					How It Works
				</li>
			</ul>
			<UserButton />
		</div>
	)
}

export default Header
