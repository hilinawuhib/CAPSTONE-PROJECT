import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { register } from "../redux/action";

const theme = createTheme();

const RegisterForm = ({ isAuthenticated, error, register }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    register(user);
  };

  return (
    <>
      <div className="register-bg">
        <h1
          style={{
            top: 100,
            textAlign: "left",
            marginLeft: "50px",
          }}
        >
          {" "}
          Welcome to Edukids!
        </h1>
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
                <h2>Register</h2>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="filled"
                        color="primary"
                        focused
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={firstName}
                        onChange={handleFirstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="filled"
                        color="primary"
                        focused
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        value={lastName}
                        onChange={handleLastName}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        color="primary"
                        focused
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleEmail}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        color="primary"
                        focused
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={handlePassword}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <h4>Role</h4>
                      <FormGroup
                        style={{
                          display: "inline-block",
                          top: 100,
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Parent"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Tutor"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Register
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Log in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </div>
          </Container>
        </ThemeProvider>
      </div>
      <div style={{ display: "flex" }}>some image gies here</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});
export default connect(mapStateToProps, { register })(RegisterForm);
