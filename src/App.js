import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

import { ReRender } from "./components/ReRender"
import { And } from "./components/And"
import { EarlyReturn } from "./components/EarlyReturn"
import { Ternary } from "./components/Ternary"
import { Style } from "./components/Style"
import { Error404 } from "./components/Error404"
import "./App.css"

function App() {
	return (
		<BrowserRouter>
			<Navbar bg="dark" variant="dark">
				<Container>
					<NavLink to="/">
						<Navbar.Brand>Renderizado condicional</Navbar.Brand>
					</NavLink>
					<Nav className="me-auto">
						<NavLink to="/">Re render</NavLink>
						<NavLink to="/early-return">Retorno temprano</NavLink>
						<NavLink to="/and">AND &&</NavLink>
						<NavLink to="/ternary">Ternario</NavLink>
						<NavLink to="/style">Style</NavLink>
					</Nav>
				</Container>
			</Navbar>
			<Routes>
				<Route path="/" element={<ReRender />} />
				<Route path="/early-return" element={<EarlyReturn />} />
				<Route path="/and" element={<And />} />
				<Route path="/ternary" element={<Ternary />} />
				<Route path="/style" element={<Style />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
