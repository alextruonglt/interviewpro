import React from "react"
import { UserButton } from "@clerk/nextjs"
import Header from "./_components/Header"
import Footer from "@/components/Footer"

const DashboardLayout = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-grow mx-5 md:mx-20 lg:mx-36">{children}</div>
			<Footer />
		</div>
	)
}

export default DashboardLayout
