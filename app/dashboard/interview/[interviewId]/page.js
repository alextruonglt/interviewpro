"use client"
import { InterviewPro } from "@/utils/schema"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { eq } from "drizzle-orm"
import { db } from "@/utils/db"
import Webcam from "react-webcam"
import { Lightbulb, WebcamIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"

const Interview = () => {
	const params = useParams()
	const [interviewData, setInterviewData] = useState()
	const [webCamEnabled, setWebCamEnabled] = useState(false)
	useEffect(() => {
		console.log(params.interviewId)
		GetInterviewDetails()
	}, [])

	// Pull interivew data from id params
	const GetInterviewDetails = async () => {
		const result = await db
			.select()
			.from(InterviewPro)
			.where(eq(InterviewPro.mockId, params.interviewId))

		setInterviewData(result[0])
	}

	return (
		<div className="my-10 ">
			<h2 className="font-bold text-2xl">Let's get started</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<div className="flex flex-col my-5 gap-5  ">
					<div className="flex flex-col p-5 rounded-lg border gap-5">
						<h2 className="text-large">
							<strong>Job Title: </strong>
							{interviewData?.jobPosition}
						</h2>
						<h2 className="text-large">
							<strong>Job Description: </strong>
							{interviewData?.jobDesc}
						</h2>
						<h2 className="text-large">
							<strong>Years Of Experience: </strong>
							{interviewData?.jobExperience}
						</h2>
					</div>
					<div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
						<h2 className="flex gap-2 items-center">
							<Lightbulb />
							<strong>Information</strong>
						</h2>
						<h2 className="pt-4">
							Please enable your Web Camera and microphone to begin. You will be
							prompted with questions and get a report after. Please note we
							don't store your video.{" "}
						</h2>
					</div>
				</div>
				<div>
					{webCamEnabled ? (
						<Webcam
							onUserMedia={() => setWebCamEnabled(true)}
							onUserMediaError={() => setWebCamEnabled(false)}
							mirrored={true}
							style={{
								height: 300,
								width: 300,
							}}
						/>
					) : (
						<>
							<WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
							<Button className="w-full" onClick={() => setWebCamEnabled(true)}>
								Enable Web Camera and Microphone
							</Button>
						</>
					)}
				</div>
			</div>
			<div className="flex justify-end items-end mt-5">
				<Link href={`/dashboard/interview/${params.interviewId}/start`}>
					<Button className="bg-green-600 hover:bg-green-500">
						Start Interview
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default Interview
