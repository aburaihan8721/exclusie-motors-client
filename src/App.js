import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home/Home";
import DashBoard from "./components/pages/DashBoard/DashBoard/DashBoard";
import Explore from "./components/pages/Explore/Explore/Explore";
import Login from "./components/pages/Login/Login/Login";
import Register from "./components/pages/Login/Register/Register";
import NotFound from "./components/pages/NotFound/NotFound";
import Purchase from "./components/pages/Purchase/Purchase/Purchase";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./components/pages/Login/Private/PrivateRoute";
import AddProduct from "./components/pages/AddProduct/AddProduct";
import AddReview from "./components/pages/AddReview/AddReview";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
            <PrivateRoute path="/purchase/:id">
              <Purchase />
            </PrivateRoute>

            <Route path="/addReview">
              <AddReview />
            </Route>

            <Route path="/addProduct">
              <AddProduct />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
