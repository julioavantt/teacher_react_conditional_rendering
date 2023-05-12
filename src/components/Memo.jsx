import { useState, memo } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const Daughter = memo(({ props }) => {
	console.log("mi props es", props)
	return <>Hola mama!</>
})

export const Memoizable = () => {
	const [num, setNum] = useState(0)
	const [string] = useState("pepe")
	console.log("render mother")

	return (
		<Container className="mt-4">
			<h1 className="mb-4">Memo</h1>
			<Daughter /> //! no
			<Daughter props={7} /> //! no
			<Daughter props={num} /> //! rerenderiza
			<Daughter props={string} /> //! no
			<Daughter props={{ item: 4 }} />
			<hr />
			<Button onClick={() => setNum(prev => prev + 1)}>Actualizar</Button>
		</Container>
	)
}
