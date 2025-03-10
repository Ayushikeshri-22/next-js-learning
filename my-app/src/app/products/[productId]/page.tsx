export default function ProductDetails({ params } : { params: { productId: string } }) {

	return <h1> List all products {params.productId}</h1>
}