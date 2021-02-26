import React from "react";
import {Link} from "react-router-dom";
import useStyles from "./styles";
import {AppBar, Typography, Toolbar, Avatar, Button} from "@material-ui/core";


const Navbar = () => {

    const classes = useStyles();
    const user = null;

    return (
        <AppBar component={Link} to="/" className={classes.appBar} position="static" color="inherit">

          <div className={classes.brandContainer}>
              <Typography className={classes.heading} variant="h2" align="center">
                Memory Bank
              </Typography>

              <img className={classes.image} src="https://i.ibb.co/DtQRbdF/writing.png" alt="icon" height="60" />
          </div>

          <Toolbar className={classes.toolbar}>

            {
              user ? (
                <div className = {classes.profile}>

                  <Avatar className={classes.purple}
                  alt={user.result.name}
                  src={user.result.ImageUrl}
                  >
                    {user.result.name.charAt(0)}
                  </Avatar>

                  <Typography className={classes.userName} variant="h6">
                      {user.result.name}
                  </Typography>

                  <Button variant="contained" className={classes.logout} color="secondary">
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
