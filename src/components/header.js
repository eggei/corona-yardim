import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core"
import red from "@material-ui/core/colors/red"
import gray from "@material-ui/core/colors/grey"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Tooltip from "@material-ui/core/Tooltip"

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
    [theme.breakpoints.down("sm")]: {
      diplay: "flex",
      justifyContent: "center",
    },
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    height: 70,
  },
  link: {
    color: "white",
    margin: theme.spacing(1, 1),
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
    },
  },
  loginBtn: {
    backgroundColor: "white",
    color: red[800],
    textTransform: "capitalize",
    margin: theme.spacing(1, 1),
    "&:hover": {
      backgroundColor: red[50],
    },
  },
  menuButton: {
    color: "white",
    margin: theme.spacing(1, 0.1),
  },
  menuLink: {
    textDecoration: "none",
    color: gray[900],
  },
  menuWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const links = [
  { title: "Yardım İstekleri", to: "/yardim-proje" },
  { title: "Gönüllüler", to: "/gonulluler" },
]
const menuItems = [
  { title: "Güncel Durum", props: { component: Link, to: "/guncel" } },
  {
    title: "Kullanıcı Hesabı",
    props: { component: Link, to: "/profil" },
  },
  {
    title: "Çıkış",
    props: { component: Link, to: "/", onClick: () => console.log("logout") },
  },
]

const Header = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
        <nav className={classes.menuWrapper}>
          {links.map(item => (
            <Link
              key={`${item.title}-link`}
              variant="button"
              color="textPrimary"
              to={item.to}
              className={classes.link}
            >
              {item.title}
            </Link>
          ))}

          <Button
            href="/giris"
            variant="contained"
            size="small"
            className={classes.loginBtn}
          >
            Giriş
          </Button>

          <Tooltip title="Menu">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <Menu
            id="main-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map(item => (
              <MenuItem key={`${item.title}-menu-link`} {...item.props}>
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </nav>
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
