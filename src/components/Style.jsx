import { useState } from "react"
import Container from "react-bootstrap/Container"

export const Style = () => {
	const [redBg, setRedBg] = useState(true)

	return (
		<Container
			className="mt-4"
			//! value ternary
			style={{ background: redBg ? "red" : "blue" }}
		>
			<h1
				//! complete object ternary
				style={{
					...(redBg
						? { color: "blue", fontStyle: "italic" }
						: { color: "red" }),
				}}
				className="mb-4"
			>
				Style
			</h1>
			<button onClick={() => setRedBg(prev => !prev)}>
				Toggle background
			</button>
		</Container>
	)
}
