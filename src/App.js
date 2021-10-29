import { Navbar, Footer } from "./Components/Layout";
import { Home, Standings, News } from "./Pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}></Route>
        <Route path={`${process.env.PUBLIC_URL}/klasemen`} exact component={Standings} />
        <Route path={`${process.env.PUBLIC_URL}/berita`} exact component={News} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
