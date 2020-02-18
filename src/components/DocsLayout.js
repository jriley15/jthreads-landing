import React, { useEffect } from "react"
import Navbar from "./Navbar"
import { makeStyles } from "@material-ui/styles"
import { CookiesProvider } from "react-cookie"
import {
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import BlurOnIcon from "@material-ui/icons/BlurOn"
import { Link } from "gatsby"
import HomeIcon from "@material-ui/icons/Home"

const drawerWidth = 220

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  content: {
    padding: theme.spacing(2),
    width: "100%",
    maxWidth: 900,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    borderBottom: "1px solid " + theme.palette.divider,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  sideNav: {
    paddingLeft: theme.spacing(2),
    backgroundColor: "#6f41f8",
    color: "white",
    boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
  },
  selectedItem: {
    borderLeft: "2px solid #6f41f8",
    color: "#6f41f8",
    backgroundColor: "rgb(111, 65, 248, 0.1);",
  },
  listItem: {
    borderLeft: "2px solid #FFFFFF",
    color: theme.palette.text.secondary,
  },
  listItemText: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  selectedIcon: {
    color: "#6f41f8",
  },
  iconRoot: {
    minWidth: theme.spacing(5),
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
  logo: {
    //color: "#6f41f8",
    marginRight: theme.spacing(1),
  },
  toolbar: theme.mixins.toolbar,
}))

export default function DocsLayout({ children, location }) {
  const classes = useStyles()

  const docs = [
    {
      label: "Overview",
      pathname: "/overview",
      icon: HomeIcon,
    },
    {
      label: "Get Started",
      pathname: "/getstarted",
      icon: HomeIcon,
    },
    {
      label: "Namespaces",
      pathname: "/namespaces",
      icon: HomeIcon,
    },
    {
      label: "Threads",
      pathname: "/threads",
      icon: HomeIcon,
    },
    {
      label: "Comments",
      pathname: "/comments",
      icon: HomeIcon,
    },
  ]

  return (
    <div className={classes.root}>
      <CookiesProvider>
        <Navbar location={location} hideLogo className={classes.appBar} />

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Toolbar className={classes.sideNav} component={Link} to="/">
            <BlurOnIcon className={classes.logo} fontSize="large" />
            <Typography variant="h6">JThreads</Typography>
          </Toolbar>

          <Divider />

          <List style={{ paddingTop: 0 }}>
            {docs.map(doc => (
              <>
                <ListItem
                  key={doc.label}
                  button
                  className={
                    location.pathname === location.pathname + doc.pathname
                      ? classes.selectedItem
                      : classes.listItem
                  }
                  component={Link}
                  to={location.pathname + doc.pathname}
                >
                  <ListItemIcon classes={{ root: classes.iconRoot }}>
                    <doc.icon
                      className={
                        location.pathname === "/" ? classes.selectedIcon : ""
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={doc.label}
                    primaryTypographyProps={{ className: classes.listItemText }}
                  />
                </ListItem>
                {doc.children?.map(child => (
                  <ListItem
                    button
                    key={child.label}
                    className={`${classes.nested} ${
                      location.pathname === "/help/docs"
                        ? classes.selectedItem
                        : classes.listItem
                    }`}
                    component={Link}
                    to={location.pathname + child.pathname}
                  >
                    <ListItemIcon classes={{ root: classes.iconRoot }}>
                      <child.icon
                        className={
                          location.pathname === "/" ? classes.selectedIcon : ""
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={child.label}
                      primaryTypographyProps={{
                        className: classes.listItemText,
                      }}
                    />
                  </ListItem>
                ))}
              </>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </CookiesProvider>
    </div>
  )
}
