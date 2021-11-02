import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PagePromotionSearch from "./Promotions/Search/Search";
import PagePromotionForm from "./Promotions/Form/Form";

const Root = () =>{

  return(

    <Router>
      <Switch>
        <Route path="/create" component={PagePromotionForm}/>
        <Route path="/edit/:id" component={PagePromotionForm}/>
        <Route path="/" component={PagePromotionSearch}/>
      </Switch>
    </Router>
  )
}

export default Root;