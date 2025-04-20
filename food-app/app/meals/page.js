import Link from "next/link"

export default function Meal(){
	return (
		<div>
			<h1>Meal page </h1>
			<br/>
			<Link href="/meals/share" style={{color:'blue'}}> Share</Link>
		</div>
	)
}