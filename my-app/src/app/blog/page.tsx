import { Metadata } from "next"


export const metadata: Metadata = {
	title: {
		absolute: 'absolute title',
		template: `Blog`,
	}
}

export default function Blog(){
	return <h1> blog page</h1>
}