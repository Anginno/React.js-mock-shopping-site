import React, { Component } from 'react';
import ProductContent from './productContent.jsx';
import RelatedProducts from '../components/relatedProducts.jsx';

const Product = ({match}) => {

	const name = match.params.name,
		  product = ProductContent.find(products => products.name === name),
		  otherProducts = ProductContent.filter(products => products.name !== name);

	if (product) {
		return (
			<React.Fragment>
				<div className="row mb-5">
					<div className="col-12 col-md-7">
						<img className="product-img-card" src={ "/images/" + product.imageUrl } alt={ "an Image of " + product.productName } />
					</div>
					<div className="col-12 col-md-5">
						<h1 className="product-title"><strong>{ product.productName }</strong></h1>
						<p>${ product.Price }</p>
						<p>{ product.Description }</p>
					</div>
				</div>
				<RelatedProducts products={ otherProducts } />
			</React.Fragment>
		);
	}

	//if the product was not found
	else {
		return (
			<React.Fragment>
				<h1>Sorry, we could not find the product you were looking for.</h1>
			</React.Fragment>
		);
	}


}

export default Product;
