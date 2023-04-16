import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Products from "./Components/Products";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Products" component={Products} />
            </Switch>
        </Router>
    );
}

export default App;
