import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
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

function JobContainer({ title, company, type, location, salary }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <Button size="small" color="primary" onClick={handleOpen}>
            View
          </Button>
        </CardActions>
      </Card>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">{ title }</h2>
              <p id="transition-modal-description">
                {company}
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

export default JobContainer;
