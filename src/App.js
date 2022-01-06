import { Route, Switch, Redirect } from "react-router-dom";

import WelcomePage from "./Components/Home&MainNav/WelcomePage";
import MainNavigation from "./Components/Home&MainNav/MainNavigation";
import ProductItems from "./Components/Products/ProductItems";
function App() {
  return (
    <header>
      <MainNavigation></MainNavigation>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" exact>
          <WelcomePage></WelcomePage>
        </Route>
        <Route path="/product" exact>
          <ProductItems></ProductItems>
        </Route>
        <Route path="/cart" exact></Route>
        <Route path="/bill" exact></Route>
        <Route>
          <div>Error!! Page Not Found</div>
        </Route>
      </Switch>
    </header>
  );
}

export default App;
