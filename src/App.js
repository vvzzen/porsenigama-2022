import { Navbar, Footer } from "./Components/Layout";
import { Home, Standings } from "./Pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/klasemen" exact component={Standings} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
