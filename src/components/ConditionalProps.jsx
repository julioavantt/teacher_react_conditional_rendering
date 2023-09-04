import { useState } from "react"
import Container from "react-bootstrap/Container"

export const ConditionalProps = () => {
	const [condition, setCondition] = useState(true)

	const styles = condition
		? {
				className: "red",
				style: { color: "blue" },
		  }
		: {}

	return (
		<Container className="mt-4">
			<h1 className="mb-4">Conditional props</h1>
			<h2 {...styles}>Jugando</h2>
			<button className="mt-4" onClick={() => setCondition(prev => !prev)}>
				Toggle condition
			</button>
		</Container>
	)
}
