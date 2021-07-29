import React, {useState} from 'react'
import {makeStyles} from "@material-ui/styles"
import ImageCard from "./ImageCard"
import Places from "./../static/Places"
import useWindowPosition from "./../hook/useWindowPosition"
const useStyles = makeStyles({
    root: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    }
})
const renderPlaces = (places) => {
    places.map((item)=>{
        return (
            <ImageCard img={item.imageUrl} title={item.title} desc={item.desc}/>
        )
    }
    )}

function Place() {
    const classes = useStyles();
    const [places, setPlaces] = useState(Places)
    const checked = useWindowPosition("header");
    return (
        <div className={classes.root} id="place-to-visit">
            {renderPlaces(places)}
            <ImageCard img={"island1.jpg"} title={"Lizards"} desc={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"} checked={checked}/>
            <ImageCard img={"island2.jpg"} title={"Bora"} desc={"Bora are a widespread group of squamate reptiles, with over 3,000 species, ranging across all continents except Antarctica"} checked={checked}/>

        </div>
    )
}

export default Place
