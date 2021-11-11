import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Components/Context/AuthProvider';
import Header from './Components/Header/Header';
import LogIn from './Components/Pages/LogIn/LogIn';
import PrivetRoute from './Components/Pages/LogIn/PrivetRouter/PrivetRouter';
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import NotFound404 from './Components/Pages/NotFound/NotFound404';
import AddSpot from './Components/Pages/Home/Places/AddSpot/AddSpot';
import ManageBooking from './Components/Pages/ManageBooking/ManageBooking';
import MyOrder from './Components/Pages/MyOrder/MyOrder';
import Contact from './Components/Pages/Home/Home/Contact/Contact';
import DashBoard from './Components/Pages/DashBoard/DashBoard';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route exat path="/home">
            <Home></Home>
          </Route>
          <PrivetRoute path="/manageorder">
            <ManageBooking></ManageBooking>
          </PrivetRoute>
          <PrivetRoute path="/addspot">
            <AddSpot></AddSpot>
          </PrivetRoute>
          <PrivetRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivetRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivetRoute path="/placeorder/:placeId">
          <PlaceOrder></PlaceOrder>
          </PrivetRoute>
          <PrivetRoute path="/myorder/:email">
            <MyOrder></MyOrder>
          </PrivetRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
          <NotFound404></NotFound404>
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
  );
}

export default App;
