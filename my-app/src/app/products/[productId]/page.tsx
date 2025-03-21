interface ProductDetailsProps{
	params: Promise<{
		productId: string
	}>

}

export default async function ProductDetails({ params } : ProductDetailsProps) {

	const { productId } = await params;

	return <h1> List all products {productId}</h1>
}