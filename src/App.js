import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Checkout from './pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        //   if (userAuth) {
        //     const userRef = await createUserDocument(userAuth);
        //     userRef.onSnapshot(snapshot => {
        //       setCurrentUser({
        //         id: snapshot.id,
        //         ...snapshot.data()
        //       });
        //     });
        //   } else {
        //     setCurrentUser(userAuth);
        //   }
        // });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInSignUp />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
