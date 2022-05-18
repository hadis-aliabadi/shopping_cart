import './App.css';
import {SwitchCase, Route, Redirect, Switch} from "react-router-dom";
//Coponents
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
//API
import ProductContextProvider from './context/ProductContextProvider';


function App() {
  return (
    <ProductContextProvider>
        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/product" component={Store} />
          <Redirect  to="/product" />
        </Switch>
    </ProductContextProvider>
  );
}

export default App;
