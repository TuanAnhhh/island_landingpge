import React from "react"
import { makeStyles } from "@material-ui/styles"
import Header from "./components/Header"
import Place from "./components/Place"
import { CssBaseline } from "@material-ui/core"
const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"

    }
})

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Place />
        </div>
    );
}

export default App;
