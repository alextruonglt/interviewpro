"use client"
import React, { useState } from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const AddNewInterview = () => {
	const [openDialog, setOpenDialog] = useState(false)
	const [jobPosition, setJobPosition] = useState()
	const [jobDesc, setJobDesc] = useState()
	const [jobExp, setJobExp] = useState()

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(jobPosition, jobDesc, jobExp)
	}

	return (
		<div>
			<div
				className="p-10 border rounded-lg bg-secondary
            hover:scale-105 hover:shadow-md cursor-pointer transition-all"
			>
				<h2
					className="font-bold text-lg text-center"
					onClick={() => setOpenDialog(true)}
				>
					+ Add New
				</h2>
			</div>
			<Dialog open={openDialog}>
				<DialogContent className="max-w-2xl">
					<DialogHeader>
						<DialogTitle className="text-2xl">
							Tell Us More About Your Interview
						</DialogTitle>
						<DialogDescription>
							<form onSubmit={onSubmit}>
								<div>
									<h2>Add Details About The Role</h2>
									<div className="mt-7 my-3">
										<label htmlFor="">Job Position</label>
										<Input
											placeholder="Ex. ML Engineer"
											required
											onChange={(e) => setJobPosition(e.target.value)}
										/>
									</div>
									<div className="my-3">
										<label htmlFor="">Job Description</label>
										<Textarea
											placeholder="Ex. Paste the whole description or list tech stack if applicable"
											required
											onChange={(e) => setJobDesc(e.target.value)}
										/>
									</div>
									<div className="my-3">
										<label htmlFor="">Years Of Experience</label>
										<Input
											placeholder="Ex. 5"
											type="Number"
											max="30"
											min="0"
											onChange={(e) => setJobExp(e.target.value)}
										/>
									</div>
								</div>
								<div className="flex gap-5 justify-end">
									<Button
										type="button"
										variant="ghost"
										onClick={() => setOpenDialog(false)}
									>
										Cancel
									</Button>
									<Button type="submit">Start Interview</Button>
								</div>
							</form>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default AddNewInterview
