import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Navigation from "../pages/navigation"
import { AppBar, Toolbar, Typography, Button, makeStyles } from "@material-ui/core"
// import { Link } from "gatsby"
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    backgroundColor: red[700],
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    margin: theme.spacing(1, 1.5),
  },
  btn: {
    color: 'white',
    borderColor: 'white',
  }
}))



const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <Logo />
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="/"
            className={classes.link}
          >
            Güncel Durum
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Yardım İstekleri
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Gönüllüler
          </Link>
        </nav>
        <Button
          href="/signin"
          variant="outlined"
          className={classes.btn}
        >
          Giriş
        </Button>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
