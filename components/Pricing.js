"use client"
import React from "react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const Pricing = () => {
	const router = useRouter()
	const dashboardClick = () => {
		router.push("/dashboard")
	}
	return (
		<section className="overflow-hidden bg-slate-50" id="pricing">
			<div className="mx-auto max-w-5xl px-8 py-24">
				<div className="mb-20 flex w-full flex-col text-center">
					<div className="mb-4">
						<div className="mx-auto max-w-fit animate-pulse whitespace-nowrap rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
							✨ Launch discount — $10 ONLY ✨
						</div>
					</div>
					<h2 className="mx-auto mb-8 max-w-xl text-3xl font-bold tracking-tight text-slate-800 lg:text-5xl">
						Transform Your Interview Preparation with AI
					</h2>
					<div className="mx-auto max-w-md font-medium text-slate-500">
						Get personalized interview feedback, practice with real-world
						questions, and build your confidence. Start improving today.
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<PricingCard
						key="Free Plan"
						dashboardClick={dashboardClick}
						title="Free Plan"
						isFeatured={false}
						price={0}
						originalPrice={0}
						features={[
							<span key="feature1">3 AI-powered interviews per week</span>,
							<span key="feature2">Basic question sets</span>,
							<span key="feature3">Standard feedback</span>,
						]}
						buttonLink="/sign-up"
						description="Perfect for trying out InterviewPro"
					/>
					<PricingCard
						dashboardClick={dashboardClick}
						key="Pro Plan"
						title="Pro Plan"
						isFeatured={true}
						price={10}
						originalPrice={30}
						features={[
							<span key="feature1">300 AI-powered interviews</span>,
							<span key="feature2">Access to premium question sets</span>,
							<span key="feature3">Detailed performance feedback</span>,
							<span key="feature4">Track your interview history</span>,
							<span key="feature5">Targeted improvement suggestions</span>,
						]}
						buttonLink="/sign-up?priceId=pro-plan"
						description="For job seekers serious about interview success"
					/>
				</div>
			</div>
		</section>
	)

	function PricingCard({
		title,
		isFeatured,
		price,
		originalPrice,
		features,
		buttonLink,
		description,
		dashboardClick,
	}) {
		return (
			<div
				className={`relative w-full rounded-lg shadow-lg ${
					isFeatured
						? "lg:-mt-4 ring-2 ring-blue-500"
						: "border border-zinc-200"
				}`}
			>
				{isFeatured && (
					<div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
						<span className="whitespace-nowrap rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
							BEST VALUE
						</span>
					</div>
				)}
				<div className="flex h-full flex-col gap-5 rounded-lg bg-white p-8">
					<div>
						<h3 className="mb-2 text-xl font-bold text-slate-800">{title}</h3>
						<p className="text-sm text-slate-600">{description}</p>
					</div>
					<div className="flex flex-wrap items-end gap-2">
						<div
							className={`mb-[4px] flex flex-col justify-end text-lg ${
								isFeatured ? "" : "hidden"
							}`}
						>
							<p className="relative">
								<span className="absolute inset-x-0 top-[53%] h-[1.5px] bg-slate-900"></span>
								<span className="text-slate-700">${originalPrice}</span>
							</p>
						</div>
						<p className="text-5xl font-black tracking-tight text-slate-800">
							${price}
						</p>
						<div className="mb-[4px] flex flex-col justify-end">
							<p className="text-xs font-semibold uppercase text-slate-500">
								USD / one-time
							</p>
						</div>
					</div>
					<ul className="flex-1 space-y-2.5 text-base leading-relaxed text-slate-700">
						{features.map((feature, index) => (
							<li key={index} className="flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="h-[18px] w-[18px] shrink-0 opacity-80"
								>
									<path
										fillRule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clipRule="evenodd"
									/>
								</svg>
								<span>{feature}</span>
							</li>
						))}
					</ul>
					<div className="space-y-2">
						<Button onClick={dashboardClick} color="blue" className="w-full">
							Get InterviewPro
						</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default Pricing
