import { Metadata } from "next";


type Props = {
	params: {
		productId: string
	}

}

export const generateMetadata = ({params} : Props) : Metadata => {
	return {
		title: `Product Details ${params.productId}`,
	}
}

export default async function ProductDetails({ params } : Props) {

	const { productId } = await params;

	return <h1> List all products {productId}</h1>
}