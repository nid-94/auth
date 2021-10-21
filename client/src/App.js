import { Route, Switch } from "react-router";
import "./App.css";
import LandPage from "./pages/LandPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Errors from "./pages/Errors";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PrivateRoute from "./route/PrivateRoute";

function App() {
    return (
        <div className="App">
            <h2>Authentification workshop</h2>
            <Navigation />
            <Switch>
                <Route exact path="/" component={LandPage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/*" component={Errors} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
