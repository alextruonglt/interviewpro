"use client"
import Webcam from "react-webcam"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import useSpeechToText from "react-hook-speech-to-text"
import { Mic } from "lucide-react"

const RecordAnswerSection = () => {
	const [userAnswer, setUserAnswer] = useState("")
	const {
		error,
		interimResult,
		isRecording,
		results,
		startSpeechToText,
		stopSpeechToText,
	} = useSpeechToText({
		continuous: true,
		useLegacyResults: false,
	})

	useEffect(() => {
		results.map((result) => {
			setUserAnswer((prevAnswer) => prevAnswer + result?.transcript)
		})
	}, [results])
	return (
		<div className="flex items-center justify-center flex-col">
			<div className="flex flex-col mt-20 justify-center items-center bg-slate-100 rounded-lg p-5">
				<Image
					src={"/Webcam.png"}
					width={200}
					height={200}
					className="absolute"
				/>
				<Webcam
					mirrored={true}
					style={{
						height: 300,
						width: "100%",
						zIndex: 10,
					}}
				/>
			</div>
			<Button
				variant="outline"
				className="my-10"
				onClick={isRecording ? stopSpeechToText : startSpeechToText}
			>
				{isRecording ? (
					<h2 className="text-red-500 flex gap-2">
						<Mic />
						Stop Recording
					</h2>
				) : (
					"Record Answer"
				)}
			</Button>

			<Button onClick={() => console.log(userAnswer)}>Show User answer</Button>
		</div>
	)
}

export default RecordAnswerSection
