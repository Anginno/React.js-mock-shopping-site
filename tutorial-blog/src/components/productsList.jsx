import React from 'react';
import { Link } from 'react-router-dom';

//component displaying each product from JSON into html
const ProductsList = ({ products }) => (

		<React.Fragment>
		{ products.map(product => (
			<div key={ product.productName }>
				<div className="col-1"></div>
				<div className="col-10">
					<div className="product-container mb-5">
						<div className="row">
							<div className="col-12 col-md-7">
								<img className="product-img-card" src={ "images/" + product.imageUrl } alt={ "an Image of " + product.productName } />
							</div>
							<div className="col-12 col-md-5">
								<p className="product-title"><strong>{ product.productName }</strong></p>
								<p>${ product.Price }</p>
								<div className="product-description">
									<Link className="mr-5" to={`/product/${ product.name }`}>View Product</Link>
									<Link to={`/product/${ product.name }`}>Add to Cart</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-1"></div>
			</div>
		))}
		</React.Fragment>

);

export default ProductsList;
