import { useState } from "react"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

export const ConditionalProps = () => {
	const [condition, setCondition] = useState(true)

	const myProps = condition
		? {
				class: "red",
				style: { color: "blue" },
		  }
		: {}

	return (
		<Container className="mt-4">
			<h1 className="mb-4">Conditional props</h1>
			<h2 {...myProps}>Jugando</h2>
			<Button className="mt-4" onClick={() => setCondition(prev => !prev)}>
				Toggle condition
			</Button>
		</Container>
	)
}
