import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
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
		<footer bg="dark" variant="dark">
			<Container className="d-flex justify-content-between">
				<div>Creado por Julio Avantt!</div>
				<div>
					<Link to="https://www.linkedin.com/in/julio-avantt/">
						<LinkedInIcon />
					</Link>
				</div>
			</Container>
		</footer>
	</BrowserRouter>
)
