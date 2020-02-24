import React, { Component } from 'react';
import ProductContent from './productContent.jsx';
import ProductsList from '../components/productsList.jsx';

class ProductsListPage extends Component {

	render() {
		return (
			<React.Fragment>
				<h1 className="mb-5 mt-5">Our Products</h1>
				<ProductsList products={ ProductContent } />
			</React.Fragment>
		)
	}

}

export default ProductsListPage;
