import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in-and-sign-up/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/Firebase';
import { setCurrentUser } from './redux/user/UserActions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={Shop}></Route>
          <Route path='/signin' component={SignInSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
