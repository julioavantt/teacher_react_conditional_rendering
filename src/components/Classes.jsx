import { useState } from "react"
import Container from "react-bootstrap/Container"

const styles = {
	width: 200,
	height: 60,
	border: "1px solid black",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}

const noexisto = undefined

export const Classes = () => {
	const [redBg, setRedBg] = useState(true)
	const other = "soyunaclase"

	return (
		<Container className="mt-4">
			<h1 className="mb-4">Classes</h1>
			<div className={redBg ? "red" : ""} style={styles}>
				1
			</div>
			<hr />
			<div {...(redBg ? { className: "red" } : {})} style={styles}>
				2
			</div>
			<hr />
			<div
				className={`messi ${redBg ? "red" : ""} ${other || ""}`}
				style={styles}
			>
				3
			</div>
			<hr />
			<div
				className={`${redBg ? "red" : ""} ${!!noexisto ? "pipi" : ""}`}
				style={styles}
			>
				4
			</div>
			<button className="mt-4" onClick={() => setRedBg(prev => !prev)}>
				Toggle background
			</button>
		</Container>
	)
}
