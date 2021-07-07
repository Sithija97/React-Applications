import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    flexGrow: 1,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  chip: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function JobContainer({ title, description }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      {/* location 
                company
                title
                job type
                salary
                description
                published date
                url
            */}
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          {/* <Typography gutterBottom variant="h6">          
          </Typography> */}
          <Typography variant="h6" gutterBottom>
            <b>{title}</b>
          </Typography>
          <Typography></Typography>
        </CardContent>
        <div className={classes.chip}>
          <Chip size="small" label="Clickable" />
          <Chip size="small" label="Clickable" />
          <Chip size="small" label="Clickable" />
        </div>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default JobContainer;
