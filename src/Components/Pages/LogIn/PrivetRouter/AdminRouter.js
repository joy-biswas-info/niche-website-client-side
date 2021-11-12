import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/UseAuth';


const AdminRouter = ({ children, ...rest }) => {
    const { user, isLoading,admin } = useAuth();
    if (isLoading) {
        return <Spinner animation = "border" varient="danger"/>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname:"/dashboard",
                    state:{form:location}
                }}
                ></Redirect>
            }
        ></Route>
    );
};

export default AdminRouter;