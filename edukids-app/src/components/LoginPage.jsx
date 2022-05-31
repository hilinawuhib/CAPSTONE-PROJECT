import * as React from "react";
import { useState,useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login } from "../redux/action";
import { useDispatch,useSelector } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
const theme = createTheme();

const Loginpage = ({ login, isAuthenticated ,error  }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
 login(user)
 
    
  };
  useEffect(() => {
    
    if (error.id === 'LOGIN_FAIL') {
      console.log("error");
    } else {
      console.log(null);
    }

    if (Box) {
      if (isAuthenticated) {
        handleSubmit();
      }
    }
  }, [error, handleSubmit, isAuthenticated]);


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <div className="login-box">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Login</h2>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                variant="filled"
                color="primary"
                focused
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleEmail}
              />
              <TextField
                variant="filled"
                color="primary"
                focused
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePassword}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>

              <Grid>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginLeft: "25%",
                    marginTop: "10%",
                  }}
                >
                  <GoogleIcon sx={{ fontSize: 30 }} />
                  <span> Login with Google </span>
                </div>
              </Grid>
            </Box>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.users.isAuthenticated,
 
  error: state.error,
});

export default connect(mapStateToProps, { login })(Loginpage);
