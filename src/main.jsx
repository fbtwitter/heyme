import React from 'react'
import ReactDOM from 'react-dom/client'

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import App from './App'
import { Index as IndexPages } from './pages/Index'
import { Index as IndexPortfolio } from './pages/portfolio/Index'

import '@/scss/styles.scss'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<IndexPages />} />
			<Route path="portfolio">
				<Route index element={<IndexPortfolio />} />
			</Route>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
