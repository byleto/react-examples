import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: 332,
  },
  media: {
    height: 140,
  },
  textAlignCourse: {
    textAlign: "left",
  },
});

const PartnerLogo = ({ partnerLogo }) => (
  <div className={"partner-logo-wrapper"}>
    <img
      src={partnerLogo}
      className={"partner-logo"}
      alt={"University of Pennsylvania"}
    />
  </div>
);

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
          <Typography variant="caption" display="block" gutterBottom>
            course
          </Typography>
        </CardContent>
        <PartnerLogo partnerLogo={props.partnerLogo} />
      </CardActionArea>
    </Card>
  );
}
