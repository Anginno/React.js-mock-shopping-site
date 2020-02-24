import React from 'react';
import { Link } from 'react-router-dom';

//component displaying each product from JSON into html
const RelatedProducts = ({ products }) => (

		<React.Fragment>
		<h4>Related Products</h4>
		<div className="row">
		{ products.map(products => (
			<Link key={ products.name } to={`/product/${ products.name }`} className="col-4">
				<img className="product-img-card" src={ "/images/" + products.imageUrl } alt={ "an Image of " + products.productName } />
				<p><strong>{ products.productName }</strong></p>
				<p>{ products.Price }</p>
			</Link>
		))}
		</div>
		</React.Fragment>

);

export default RelatedProducts;
