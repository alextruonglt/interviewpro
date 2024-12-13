import { Button } from "@/components/ui/button"
import React from "react"
import { useRouter } from "next/navigation"

const InterviewItemCard = ({ interview }) => {
	const router = useRouter()
	const onStartClick = () => {
		router.push(`/dashboard/interview/${interview?.mockId}`)
	}
	const onFeedbackClick = () => {
		router.push(`/dashboard/interview/${interview?.mockId}/feedback`)
	}
	return (
		<div className="border shadow-sm rounded-lg p-3">
			<h2 className="font-bold text-primary">{interview?.jobPosition}</h2>
			<h2 className="text=sm text-gray-600">
				{interview?.jobExperience} Years Of Experience
			</h2>
			<h2 className="text-xs text-gray-500">
				Created At {interview?.createdAT}
			</h2>
			<div className="flex justify-between mt-2 gap-5">
				<Button
					size="sm"
					variant="outline"
					className="w-full"
					onClick={onFeedbackClick}
				>
					Feedback
				</Button>
				<Button size="sm" className="w-full" onClick={onStartClick}>
					Start
				</Button>
			</div>
		</div>
	)
}

export default InterviewItemCard
