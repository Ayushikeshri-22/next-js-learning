export default function ReviewDetails({ params } :
	{params : {
		reviewId : string,
		productId : string
	}}
 ) {

	return <h1> Review of {params.reviewId} of product {params.productId}</h1>
}