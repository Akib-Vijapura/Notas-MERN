import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/auth/PrivateScreen";
import LoginScreen from "./components/screens/auth/LoginScreen";
import RegisterScreen from "./components/screens/auth/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/auth/ResetPasswordScreen";
import Home from "./components/screens/Home";
// import MyNotes from "./components/screens/Mynotes/MyNotes";
import CreateNotes from "./components/screens/CreateNotes/CreateNotes";
import EditNote from "./components/screens/EditNote/EditNote";
import ReadNote from "./components/screens/EditNote/ReadNote";
import AccountSetting from "./components/screens/AccountSetting/AccountSetting";
import FeedBack from "./components/screens/FeedBack/FeedBack";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/welcome" component={Home} />
          {/* <PrivateRoute exact path="/mynotes" component={MyNotes} /> */}
          <PrivateRoute exact path="/createnote" component={CreateNotes} />
          <PrivateRoute exact path="/notes/:id" component={EditNote} />
          <PrivateRoute exact path="/note/:id" component={ReadNote} />
          <PrivateRoute
            exact
            path="/accountsetting"
            component={AccountSetting}
          />
          <PrivateRoute exact path="/feedback" component={FeedBack} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
