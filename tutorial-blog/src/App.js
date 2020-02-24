import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	}
	from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import HomePage from './pages/homePage.jsx';
import Product from './pages/product.jsx';
import ProductsListPage from './pages/productsListPage.jsx';
import AboutPage from './pages/aboutPage.jsx';
import NotFoundPage from './pages/notFoundPage.jsx';
import './App.css';

function App() {
  return (
	  <React.Fragment>
		  <Router>
		  <Header />
		  <main>
			  <div className="row">
				  <div className="col-1"></div>
				  <div className="col-10">
					  <Switch>
						  <Route path="/" component={HomePage} exact />
						  <Route path="/about" component={AboutPage} exact />
						  <Route path="/products" component={ProductsListPage} exact />
						  <Route path="/product/:name" component={Product} exact />
						  <Route component={NotFoundPage} />
					  </Switch>
				  </div>
				  <div className="col-1"></div>
			  </div>
		  </main>
		  </Router>
		  <Footer />
	  </React.Fragment>
  );
}

export default App;
