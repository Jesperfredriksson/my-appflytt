import Hem from "./Hem";
import Nyinflyttad from "./Nyinflyttad";
import Företag from "./Företag";
import Kontakt from "./Kontakt";
import Tipsinforflytten from "./Tipsinforflytten";
import WhereIs from "./WhereIs";
import FlyttatIn from "./FlyttatIn";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Hem} />
      <Route exact path="/nyinflyttad" component={Nyinflyttad} />
      <Route exact path="/foretag" component={Företag} />
      <Route exact path="/kontakt" component={Kontakt} />
      <Route exact path="/Tipsinforflytten" component={Tipsinforflytten} />
      <Route exact path="/Har-finns-flytt-kalas" component={WhereIs} />
      <Route exact path="/Nar-du-flyttat-in" component={FlyttatIn} />
    </Switch>
  </BrowserRouter>
);

export default Router;
