import React from "react";
import { Link, useRouteMatch, Switch} from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import AddProduct from "../Home/Places/AddProduct/AddProduct";
import ReviewForm from "../Home/Review/ReviewForm";
import AdminRouter from "../LogIn/PrivetRouter/AdminRouter";
import PrivetRoute from "../LogIn/PrivetRouter/PrivetRouter";
import ManageOrder from "../ManageOrder/ManageOrder";
import MyOrder from "../MyOrder/MyOrder";
import Admin from "./Admin";
import PayNow from "./PayNow/PayNow";
import './DashBoard.css'
import { Container } from "react-bootstrap";

const DashBoard = () => {
  const { admin,logOut,user } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <Container>
      <div className="flex-wrap row">
      <div className="col-md-6 col-lg-2">
        <ul>
        <li>
            <Link to={`${url}/myorder`}>My Order</Link>
          </li>
        <li>
            <Link to={`${url}/paynow`}>Pay Now</Link>
          </li>
        <li>
            <Link to={`${url}/review`}>Review </Link>
          </li>
          {admin &&
            <>
              <li>
              <Link to={`${url}/addadmin`}>Add admin</Link>
            </li>
            <li>
              <Link to={`${url}/addproduct`}>Add Products</Link>
            </li>
            
            <li>
              <Link to={`${url}/manageorder`}>Manage Order</Link>
            </li>
            </>
          }
          <button onClick={logOut} style={{padding:'5px',backgroundColor:'red'}}>Log Out</button>
        </ul>
      </div>
        <div className="col-md-6 col-lg-8 p-2">
          <h2>Hi <span style={{color:'red',fontWeight:'bold'}}>{user?.displayName}</span> Welcome To dashboard </h2>
        <Switch>
          <AdminRouter exact path={`${path}/addadmin`}>
            <Admin></Admin>
          </AdminRouter>
          <PrivetRoute exact path={`${path}/myorder`}>
            <MyOrder></MyOrder>
          </PrivetRoute>
          <PrivetRoute exact path={`${path}/review`}>
            <ReviewForm></ReviewForm>
          </PrivetRoute>
          <PrivetRoute exact path={`${path}/paynow`}>
            <PayNow></PayNow>
          </PrivetRoute>
          <AdminRouter path={`${path}/manageorder`}>
            <ManageOrder></ManageOrder>
          </AdminRouter>
          <AdminRouter path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </AdminRouter>
        </Switch>
      </div>
    </div>
    </Container>
  );
};

export default DashBoard;
