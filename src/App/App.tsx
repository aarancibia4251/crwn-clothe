import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePageComponent from "../pages/homepage/homepage.component";

import { firestore, auth } from '../firebase/firebase.utils';

import "./App.css";
import ShopPage from "../pages/shop/shop.component";
import Header from "../components/header/header.component";
import SignInAndSignupPage from "../pages/sign-in-and-sign-up/sign-in-and-sign-up";

interface AppStateInterface {
    currentUser: any
}

class App extends React.Component<{}, AppStateInterface> {

    unsubscribeFromAuth: any = null;

    constructor(props: any)
    {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    componentDidMount(): void {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
           this.setState({ currentUser: user });
        });
    }

    componentWillUnmount(): void {
        this.unsubscribeFromAuth();
    }

    render() {return (
    <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInAndSignupPage} />
      </Switch>
    </div>
  );}
}

export default App;
