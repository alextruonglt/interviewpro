"use client"
import { db } from "@/utils/db"
import { useUser } from "@clerk/nextjs"
import React, { useEffect, useState } from "react"
import { InterviewPro } from "@/utils/schema"
import { desc, eq } from "drizzle-orm"
import InterviewItemCard from "./InterviewItemCard"

const InterviewList = () => {
	const { user } = useUser()
	const [interviewList, setInteviewList] = useState([])

	useEffect(() => {
		user && getInterviewlist()
	}, [user])

	const getInterviewlist = async () => {
		const result = await db
			.select()
			.from(InterviewPro)
			.where(
				eq(InterviewPro.createdBy, user?.primaryEmailAddress?.emailAddress)
			)
			.orderBy(desc(InterviewPro.id))

		console.log(result)
		setInteviewList(result)
	}

	return (
		<div>
			<h2 className="font-bold text-xl">Previous Mock Interview</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
				{interviewList &&
					interviewList.map((interview, index) => {
						return <InterviewItemCard key={index} interview={interview} />
					})}
			</div>
		</div>
	)
}

export default InterviewList
