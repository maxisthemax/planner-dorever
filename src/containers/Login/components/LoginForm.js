import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import useForm from "react-hook-form";

//components
import ButtonProgress from "../../../components/ButtonProgress";

//material-ui
import {
  Grid,
  Link,
  TextField,
  FormControlLabel,
  Checkbox,
  Divider
} from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";

//helpers
import {
  loginValidate,
  loginValidateErrorText
} from "../../../helpers/formValidationHelpers";

//assets

//styles
//const useStyles = makeStyles(theme => ({}));

function LoginForm() {
  //const classes = useStyles();
  const firebase = useFirebase();
  const { handleSubmit, register, errors, formState } = useForm({
    mode: "onBlur"
  });

  //states
  const [loading, setLoading] = useState(false);

  //functions
  function onSubmit({ email, password }) {
    setLoading(true);
    firebase.login({ email: email, password: password });
  }

  return (
    <form noValidate autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid container item justify="center">
          <Grid item xs={12}>
            <TextField
              color="primary"
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              error={!!errors.email}
              helperText={
                errors.email && loginValidateErrorText.email[errors.email.type]
              }
              inputRef={register(loginValidate.email)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              color="primary"
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              margin="normal"
              error={!!errors.password}
              helperText={
                errors.password &&
                loginValidateErrorText.password[errors.password.type]
              }
              inputRef={register(loginValidate.password)}
            />
          </Grid>

          <Grid
            container
            item
            xs={12}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Link color="primary" href="http://www.redideasholdings.com/">
                    Forgot Your Password?
                  </Link>
                }
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12} justify="center">
          <Grid item>
            <ButtonProgress
              type="submit"
              loading={loading}
              containName="Log in"
              disabled={!formState.isValid}
            />
          </Grid>
        </Grid>
        <Grid container item justify="center">
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Grid item>
            Don’t have an account?{" "}
            <Link color="primary" href="">
              Sign up
            </Link>{" "}
            an account
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default React.memo(LoginForm);
