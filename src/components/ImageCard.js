import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    maxHeight: 550,
    background: "rgba(0,0,0,.5)",
    marginLeft: "1rem",
    marginRight: "1rem",

  },
  media: {
    height: 400
  },
  textContent: {
    fontFamily: "Nutino",
    fontSize: "1rem",
    color: "white"
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "white"
  }
});

export default function ImageCard(props) {
  const classes = useStyles();
  const { img, title, desc, checked } = props

  return (
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          image={process.env.PUBLIC_URL + "/assets/" + img}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography className={classes.textTitle} gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.textContent} variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
