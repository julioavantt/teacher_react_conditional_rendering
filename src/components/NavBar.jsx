import { NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

export const NavBar = ({ routes }) => (
	<Navbar bg="dark" variant="dark">
		<Container>
			<NavLink to="/">
				<Navbar.Brand>Renderizado condicional</Navbar.Brand>
			</NavLink>
			<Nav className="me-auto">
				{routes
					.filter(route => route.path !== "*")
					.map(({ path, title }) => (
						<NavLink key={path} to={path}>
							{title}
						</NavLink>
					))}
			</Nav>
		</Container>
	</Navbar>
)
