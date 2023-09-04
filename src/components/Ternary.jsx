import { useState } from "react"

import Container from "react-bootstrap/Container"
import TableBootstrap from "react-bootstrap/Table"
import FormBootstrap from "react-bootstrap/Form"

const Form = ({ setShowForm }) => (
	<FormBootstrap>
		<FormBootstrap.Group className="mb-3" controlId="formBasicEmail">
			<FormBootstrap.Label>Email address</FormBootstrap.Label>
			<FormBootstrap.Control type="email" placeholder="Enter email" />
			<FormBootstrap.Text className="text-muted">
				We'll never share your email with anyone else.
			</FormBootstrap.Text>
		</FormBootstrap.Group>
		<FormBootstrap.Group className="mb-3" controlId="formBasicPassword">
			<FormBootstrap.Label>Password</FormBootstrap.Label>
			<FormBootstrap.Control type="password" placeholder="Password" />
		</FormBootstrap.Group>
		<FormBootstrap.Group className="mb-3" controlId="formBasicCheckbox">
			<FormBootstrap.Check type="checkbox" label="Check me out" />
		</FormBootstrap.Group>
		<button type="submit">Submit</button>
		<button onClick={() => setShowForm(false)}>Cerrar form</button>
	</FormBootstrap>
)

const Table = ({ setShowForm }) => (
	<TableBootstrap striped>
		<thead>
			<tr>
				<th>#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Mark</td>
				<td>Otto</td>
				<td>
					<button onClick={() => setShowForm(true)}>Mostrar form</button>
				</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>
					<button onClick={() => setShowForm(true)}>Mostrar form</button>
				</td>
			</tr>
			<tr>
				<td>3</td>
				<td colSpan={2}>Larry the Bird</td>
				<td>
					<button onClick={() => setShowForm(true)}>Mostrar form</button>
				</td>
			</tr>
		</tbody>
	</TableBootstrap>
)

export const Ternary = () => {
	const [showForm, setShowForm] = useState(false)

	return (
		<Container className="mt-4" id="and">
			<h1 className="mb-4">Ternario</h1>
			{showForm ? (
				<Form setShowForm={setShowForm} />
			) : (
				<Table setShowForm={setShowForm} />
			)}
		</Container>
	)
}
