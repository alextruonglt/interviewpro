import { Lightbulb, Volume2 } from "lucide-react"
import React from "react"

const QuestionsSection = ({ mockInterviewQuestions, activeQuestionIdx }) => {
	const textToSpeach = (text) => {
		if ("speechSynthesis" in window) {
			const speech = new SpeechSynthesisUtterance(text)
			window.speechSynthesis.speak(speech)
		} else {
			alert("Sorry, Your Browser does not support text to speech")
		}
	}
	return (
		mockInterviewQuestions && (
			<div className="p-5 border rounded-lg my-10">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
					{mockInterviewQuestions &&
						mockInterviewQuestions.map((question, idx) => {
							return (
								<h2
									key={idx}
									className={`p-2  rounded-full
                                text-xs md:text-sm text-center cursor-pointer  
                                ${
																	activeQuestionIdx == idx
																		? "bg-primary text-white"
																		: "bg-secondary"
																}`}
								>
									Question #{idx + 1}
								</h2>
							)
						})}
				</div>
				<h2 className="my-5 text:md md:text-lg">
					{mockInterviewQuestions[activeQuestionIdx]?.question}
				</h2>
				<Volume2
					className="cursor-pointer"
					onClick={() =>
						textToSpeach(mockInterviewQuestions[activeQuestionIdx]?.question)
					}
				/>
				<div className="border rounded-lg p-5 bg-gray-100 mt-20">
					<h2 className="flex gap-2 items-center">
						<Lightbulb />
						<strong>Note:</strong>
					</h2>
					<h2 className="text-sm my-2">
						Click on the reocrd answer when you wantt o answer. At the end. The
						engine will give you feedback along with the correct answer for each
						question to compare
					</h2>
				</div>
			</div>
		)
	)
}

export default QuestionsSection
