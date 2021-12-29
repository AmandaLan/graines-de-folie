import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './app/reducers';
import "./index.scss";
// import "./app/assets/sass/main.scss"
import App from './app/App';
// import Home from './app/components/page/Home';
import NotFound from './app/components/page/NotFound';
import Admin from './app/components/page/Admin';
import ProductFormAdmin from './app/components/layout/ProductFormAdmin';
import Cactus from './app/components/products/Cactus';
import Flowers from './app/components/products/Flowers';
import Tropical from './app/components/products/Tropical';
import ProductDetail from './app/components/products/ProductDetail';


import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
  <Router>
    <Switch>
      <Route exact path= '/' component={App}/>
      <Route path='/cactus' component={Cactus}/>
      <Route path='/detail/:id' component={ProductDetail}/>
      <Route path='/flowers' component={Flowers}/>
      <Route path='/tropical' component={Tropical}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/ajout-produit' component={ProductFormAdmin}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
);

