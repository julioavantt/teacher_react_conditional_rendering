import { ReRender } from "../components/ReRender"
import { And } from "../components/And"
import { EarlyReturn } from "../components/EarlyReturn"
import { Ternary } from "../components/Ternary"
import { Style } from "../components/Style"
import { Classes } from "../components/Classes"
import { Text } from "../components/Text"
import { ConditionalProps } from "../components/ConditionalProps"
import { Memoizable } from "../components/Memo"
import { Error404 } from "../components/Error404"

export const routes = [
	{ path: "/", component: <ReRender />, title: "Re render" },
	{
		path: "early-return",
		component: <EarlyReturn />,
		title: "Retorno temprano",
	},
	{ path: "/and", component: <And />, title: "AND &&" },
	{ path: "ternary", component: <Ternary />, title: "Ternary" },
	{ path: "/style", component: <Style />, title: "Style" },
	{ path: "/classes", component: <Classes />, title: "Classes" },
	{
		path: "/conditional-props",
		component: <ConditionalProps />,
		title: "ConditionalProps",
	},
	{ path: "/text", component: <Text />, title: "Text" },
	{ path: "/memoizable", component: <Memoizable />, title: "Memo" },
	{ path: "*", component: <Error404 /> },
]
