import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Components/Context/AuthProvider";
import Header from "./Components/Header/Header";
import LogIn from "./Components/Pages/LogIn/LogIn";
import PrivetRoute from "./Components/Pages/LogIn/PrivetRouter/PrivetRouter";
import Footer from "./Components/Footer/Footer";
import NotFound404 from "./Components/Pages/NotFound/NotFound404";
import DashBoard from "./Components/Pages/DashBoard/DashBoard";
import PlaceOrder from "./Components/Pages/PlaceOrder/PlaceOrder";
import Products from "./Components/Pages/Products/Products";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exat path="/home">
            <Home></Home>
          </Route>
          <PrivetRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivetRoute>
          <PrivetRoute path="/placeorder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivetRoute>
          <PrivetRoute path="/products">
            <Products></Products>
          </PrivetRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          {/* <Route path="*">
            <NotFound404></NotFound404>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
