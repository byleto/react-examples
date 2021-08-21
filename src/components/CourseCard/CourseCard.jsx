import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  span: {
    height: 140,
  },
  textAlignCourse: {
    textAlign: "left",
  },
});

export default function CourseCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.coverImage}
          title="course image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography
            className={classes.span}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.institutionName}
          </Typography>
          <Typography className={classes.textAlignCourse} variant="caption" display="block" gutterBottom>
            course
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
