import { useState } from "react"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const MeVes = () => <mark>SOY EL COMPONENTE ME VES!! ¿👀 ME VES?</mark>

export const And = () => {
	const [showValue, setShowValue] = useState(true)

	return (
		<Container className="mt-4" id="and">
			<h1 className="mb-4">And &&</h1>
			{showValue && (
				<>
					<MeVes />
					<div>Funciona también con nodos DOM!!!</div>
				</>
			)}
			<hr />
			<Button onClick={() => setShowValue(prev => !prev)}>
				Toggle value
			</Button>
		</Container>
	)
}
