import React from 'react'
import reactLogo from '@/assets/react.svg'
import { Link } from 'react-router-dom'

export const Index = () => {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-slate-800">
			<figure className="w-20">
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} alt="React logo" className="w-full" />
				</a>
			</figure>
			<h1 className="text-4xl text-neutral-100">Heyme!</h1>
			<Link
				to="getting-started"
				className="rounded-lg bg-slate-900 px-8 py-2 text-neutral-100"
			>
				Visit Getting Started
			</Link>
		</div>
	)
}
