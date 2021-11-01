import { Navbar, Footer } from "./Components/Layout";
import { Home, Standings, News, Faq } from "./Pages";
import { Switch, Route } from "react-router-dom";
import ScrollIntoView from './Components/Layout/hooks/ScrollIntoView'

function App() {
  return (
    <div>
      <Navbar />
      <div className = 'h-10'></div>
      <ScrollIntoView >
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}></Route>
          <Route path={`${process.env.PUBLIC_URL}/klasemen`} exact component={Standings} />
          <Route path={`${process.env.PUBLIC_URL}/berita`} exact component={News} />
          <Route path={`${process.env.PUBLIC_URL}/faq`} exact component={Faq} />
        </Switch>
      </ScrollIntoView>
      <Footer />
    </div>
  );
}

export default App;
