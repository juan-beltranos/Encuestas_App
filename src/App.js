import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GoblaStyle";
// pages
import { Splash } from "./pages/Splash";
import { Home } from "./pages/Home";
import { Available } from "./pages/Available";
import { Saved } from "./pages/Saved";
import { Contact } from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";
import { SurveyPage } from "./pages/SurveyPage";
// components
import ScrollToTop from "./components/ScrollToTop/index";
// hooks
import useCurrentUserInfo from "./hooks/useCurrentUserInfo";
import useInitialRegion from "./hooks/useInitialRegion";

function App() {
  const [getInitialData] = useCurrentUserInfo();
  const [getRegion] = useInitialRegion();

  useEffect(() => {
    getInitialData();
    getRegion();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/available" component={Available} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/survey/:surveyId" component={SurveyPage} />
      </Switch>
    </Router>
  );
}

export default App;
