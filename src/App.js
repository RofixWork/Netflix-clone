import React, { useEffect } from "react";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/reducers/UserSlice";
import ProfileScreen from "./pages/ProfileScreen";
function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        <CssBaseline />
        {!user ? (
          <LoginScreen />
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/profile">
                <ProfileScreen />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
