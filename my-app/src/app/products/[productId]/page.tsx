import { Metadata } from "next";


type Props = {
	params: {
		productId: string
	}

}

// generate dynamic meta data
export const generateMetadata =  ({params} : Props) : Metadata => {
	// const title = await new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve({
	// 			title: `iphone ${params.productId}`
	// 		})
	// 	}, 10)
	// })
	// console.log(title)
	return {
		title : `Product ${params.productId}`
	}
}

export default function ProductDetails({ params } : Props) {

	const { productId } =  params;

	return <h1> List all products {productId}</h1>
}