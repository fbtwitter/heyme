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
import { Index as IndexFM } from './pages/portfolio/fm/Index'
import { Index as IndexFMGettingStarted } from './pages/portfolio/fm/getting-started/Index'

import '@/scss/styles.scss'
import QRCode from './pages/portfolio/fm/getting-started/QRCode'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<IndexPages />} />
			<Route path="portfolio">
				<Route index element={<IndexPortfolio />} />
				<Route path="fm">
					<Route index element={<IndexFM />} />
					<Route path="getting-started">
						<Route index element={<IndexFMGettingStarted />} />
						<Route path="qr-code" element={<QRCode />} />
					</Route>
				</Route>
			</Route>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
