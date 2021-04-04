import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const {userInfo, cartInfo} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;
    return (
        <Route
            {...rest}
            render={({ location }) => loggedInUser.email 
                ? (children) 
                : (
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;