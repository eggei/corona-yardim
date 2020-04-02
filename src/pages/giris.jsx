import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SignIn = props => {
  const classes = useStyles()
  const [loginForm, setLoginForm] = React.useState(true)
  return (
    <Layout>
      <SEO title="Giriş" />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Üye Girişi
          </Typography>
          {loginForm ? (
            <form className={classes.form} target="/login">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Adresi"
                name="email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Şifre"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Beni hatırla"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Giriş
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button
                    onClick={() => null}
                    variant="outlined"
                    size="small"
                    style={{ textTransform: "capitalize" }}
                  >
                    Şifremi unuttum
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    // onClick={() => setLoginForm(false)}
                    href="/uyelik"
                    variant="outlined"
                    size="small"
                    style={{ textTransform: "capitalize" }}
                  >
                    Üye ol
                  </Button>
                </Grid>
              </Grid>
            </form>
          ) : (
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Ad"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Soyad"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Adresi"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Şifre"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password-confirm"
                    label="Şifre Tekrar"
                    type="password-confirm"
                    id="password-confirm"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Kaydol
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button
                    onClick={() => setLoginForm(true)}
                    variant="outlined"
                    size="small"
                    style={{ textTransform: "capitalize" }}
                  >
                    Hesabım var. Giriş yap.
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </div>
        <Box mt={8}></Box>
      </Container>
    </Layout>
  )
}

SignIn.propTypes = {}

export default SignIn
