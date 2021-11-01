import { Navbar, Footer } from "./Components/Layout";
import { Home, Standings, News, Faq, Cabor } from "./Pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          exact
          component={Home}
        ></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/klasemen`}
          exact
          component={Standings}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/cabor`}
          exact
          component={Cabor}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/berita`}
          exact
          component={News}
        />
        <Route path={`${process.env.PUBLIC_URL}/faq`} exact component={Faq} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
