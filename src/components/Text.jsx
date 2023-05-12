import { useState } from "react"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

export const Text = () => {
	const [condition, setCondition] = useState(true)

	return (
		<Container className="mt-4">
			<h1 className="mb-4">Condition es: {JSON.stringify(condition)}</h1>
			<Button className="mt-4" onClick={() => setCondition(prev => !prev)}>
				Toggle condition
			</Button>
		</Container>
	)
}
