import { useState } from "react"

import Container from "react-bootstrap/Container"

export const ReRender = () => {
	const [inputValue, setInputValue] = useState("")

	console.log("render:", inputValue)

	return (
		<Container className="mt-4">
			<h1 className="mb-4">Evento inline</h1>
			<input
				type="text"
				value={inputValue}
				onChange={event => setInputValue(event.target.value)}
			/>
		</Container>
	)
}
