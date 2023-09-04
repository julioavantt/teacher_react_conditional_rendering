import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

import products from "../data/products.json"

export const EarlyReturn = () => {
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const delay = setTimeout(() => {
			setList(products)
			setLoading(false)
		}, 5000)

		return () => clearTimeout(delay)
	}, [])

	if (loading) {
		return <Container className="mt-4">Loading...</Container>
	}

	return (
		<Container className="mt-4">
			<h1 className="mb-4">Retorno temprano</h1>
			{list.map(item => (
				<Card key={item.id}>
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>Categoría: {item.category}</Card.Text>
					</Card.Body>
				</Card>
			))}
		</Container>
	)
}
