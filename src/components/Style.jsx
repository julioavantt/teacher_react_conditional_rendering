import { useState } from "react"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

export const Style = () => {
	const [redBg, setRedBg] = useState(true)

	return (
		<Container
			className="mt-4"
			style={{ background: redBg ? "red" : "blue" }}
		>
			<h1 className="mb-4">Style</h1>
			<Button onClick={() => setRedBg(prev => !prev)}>
				Toggle background
			</Button>
		</Container>
	)
}
