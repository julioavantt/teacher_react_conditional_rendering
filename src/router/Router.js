import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import "./Router.css"
import { routes } from "./routesData"
import { NavBar } from "../components/NavBar"

export const Router = () => (
	<BrowserRouter>
		<NavBar routes={routes} />
		<Routes>
			{routes.map(({ path, component }) => (
				<Route key={path} path={path} element={component} />
			))}
		</Routes>
	</BrowserRouter>
)
