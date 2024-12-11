import React from "react"
import { UserButton } from "@clerk/nextjs"
import Header from "./_components/Header"

const DashboardLayout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default DashboardLayout
