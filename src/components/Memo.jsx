import React, { useState, memo } from "react"
import Container from "react-bootstrap/Container"

const Daughter = memo(({ props }) => {
	console.log("mi props es", props)
	return <>🦄</>
})

export const Memoizable = () => {
	const [num, setNum] = useState(0)
	const [string] = useState("pepe")
	console.log("render mother")

	return (
		<Container className="mt-4">
			<h1 className="mb-4">Memo</h1>
			<Daughter />
			<Daughter props={7} />
			<Daughter props={num} />
			<Daughter props={string} />
			<Daughter props={{ item: 4 }} />
			<hr />
			<button onClick={() => setNum(prev => prev + 1)}>Actualizar</button>
		</Container>
	)
}
