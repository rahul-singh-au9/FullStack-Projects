import React, { useState, useEffect} from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import {AppBar, Typography, Toolbar, Avatar, Button} from "@material-ui/core";
import {LOGOUT} from "../../constants/actionTypes"


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
      const token = user?.token;
      setUser(JSON.parse(localStorage.getItem("profile")))
    },[location]);

    const logout = () => {
      dispatch({
        type: LOGOUT
      });

      history.push('/auth');

      setUser(null);
    };

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">

          <div className={classes.brandContainer}>
              <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
                Memory Bank
              </Typography>

              <img className={classes.image} src="https://i.ibb.co/DtQRbdF/writing.png" alt="icon" height="60" />
          </div>

          <Toolbar className={classes.toolbar}>

            {
              user ?. result ? (
                <div className = {classes.profile}>

                  <Avatar className={classes.purple}
                  alt={user?.result.name}
                  src={user?.result.ImageUrl}
                  >
                    {user?.result.name.charAt(0)}
                  </Avatar>

                  <Typography className={classes.userName} variant="h6">
                      {user?.result.name}
                  </Typography>

                  <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
                      Logout
                  </Button>
                </div>

              ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">
                  Sign In
                </Button>
              )
            }

          </Toolbar>

        </AppBar>
    )
}

export default Navbar
