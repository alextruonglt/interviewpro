"use client"
import { db } from "@/utils/db"
import { UserAnswer } from "@/utils/schema"
import { eq } from "drizzle-orm"
import React, { useEffect, useState } from "react"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"

const Feedback = () => {
	const params = useParams()

	const [feedbackList, setFeedbackList] = useState([])
	const route = useRouter()

	useEffect(() => {
		getFeedback()
	}, [])
	const getFeedback = async () => {
		const result = await db
			.select()
			.from(UserAnswer)
			.where(eq(UserAnswer.mockIdRef, params.interviewId))
			.orderBy(UserAnswer.id)
		console.log(result)
		setFeedbackList(result)
	}

	let total = 0
	feedbackList.forEach((item) => {
		if (item.rating == null) {
			item.rating = 0
		}
		item.rating = Number(item.rating)
		total += item.rating
	})

	let average = total / feedbackList.length
	let roundedAverage = Math.round(average)

	return (
		<div className="p-10">
			{feedbackList?.length == 0 ? (
				<h2 className="font-bold text-xl text-gray-500 ">
					No Interview Feedback Found
				</h2>
			) : (
				<>
					<h2 className="text-2xl font-bold text-green-500">Congratulations</h2>
					<h2 className="font-bold text-2xl">
						Here is your interview feedback
					</h2>
					<h2>Your overall interview rating: {roundedAverage}/100</h2>

					<h2 className="text-sm text-gray-500">
						Find Below interview Question, With A Sample Answer, And Feedback{" "}
					</h2>

					{feedbackList &&
						feedbackList.map((item, idx) => {
							return (
								<Collapsible key={idx} className="mt-4">
									<CollapsibleTrigger
										className="p-2 bg-secondary rounded-lg my-2 text-left
								flex justify-between items-center  w-full
							"
									>
										{item.question}
										<ChevronsUpDown className="h-6 w-6 " />
									</CollapsibleTrigger>
									<CollapsibleContent>
										<div className="flex flex-col gap-2">
											<h2 className="text-red-500 p-2 border rounded-lg">
												Rating: {item.rating} / 100
											</h2>
											<h2 className="p-2 text-sm border rounded-lg bg-red-50">
												<strong>Your Answer:</strong>
												{item.userAnswer}
											</h2>
											<h2 className="p-2 text-sm border rounded-lg bg-green-50">
												<strong>Sample Answer:</strong>
												{item.correctAnswer}
											</h2>
											<h2 className="p-2 text-sm border rounded-lg bg-primary">
												<strong>Feedback:</strong>
												{item.feedback}
											</h2>
										</div>
									</CollapsibleContent>
								</Collapsible>
							)
						})}
				</>
			)}

			<Button onClick={() => route.replace("/dashboard")}>Go Home</Button>
		</div>
	)
}

export default Feedback
