import React, {useState, useEffect} from "react"
import {makeStyles} from "@material-ui/styles"
import { AppBar,IconButton, Toolbar,Collapse } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link as Scroll } from 'react-scroll'
const useStyles = makeStyles({
    appbar: {
        background: "none",
        fontFamily: "Nutino"
    },
    appbarTitle: {
        flex: "1"
    },
    appbarIcon: {
        color:"white",
        fontSize: "2rem"
    },
    appbarWrap: {
        width: "80%",
        margin: "auto"
    },
    appbarSubTitle: {
        color: "#00988e"
    },
    root: {
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        height:"100vh"
    },

    content:{
        textAlign: "center",
        color: "white",
        fontFamily: "Nutino",
    },
    mainText: {
        fontSize:"4rem",


    },
    iconDown: {
        fontSize:"3rem",
        color: "#00988e",
    }
})

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
      setChecked(true)
  }, [checked])
  return (
      <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrap}>
                <h1 className={classes.appbarTitle}>My<span className={classes.appbarSubTitle}>Island.</span></h1>
                <IconButton>
                    <SortIcon className={classes.appbarIcon}></SortIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Collapse
            in={checked}
            {...(checked? {timeout:1000}: {})}
            >
            <div className={classes.content}>
                <h1 className={classes.mainText}>Welcome to <br/> My <span className={classes.appbarSubTitle}>Island.</span></h1>
               <Scroll to ="place-to-visit" smooth={true}>
                    <IconButton>
                        <KeyboardArrowDownIcon className={classes.iconDown}/>
                    </IconButton>
               </Scroll>

            </div>
        </Collapse>
      </div>
  );
}

export default Header;
