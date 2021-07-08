import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { makeStyles, Divider, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import JobContainer from "./JobContainer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
}));

function JobsList() {
  const initialState = {
    loading: true,
    data: [],
  };
  // state
  const [state, setState] = useState(initialState);
  // pagination
  const itemsPerPage = 20;
  const [page, setPage] = useState(1);
  const noOfPages = Math.ceil(state.data.length / itemsPerPage);
  const handleChange = (event, value) => {
    setPage(value);
  };
  // styles
  const classes = useStyles();
  // fetch data
  const fetchData = async () => {
    await axios
      .get("https://remotive.io/api/remote-jobs?category=software-dev")
      .then(
        (response) =>
          setState({
            data: response.data.jobs,
            loading: false,
          }),
        console.log(state.loading)
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {}, [fetchData()]);
  console.log(state.data);
  return (
    <>
      <div style={{ display: "flex" }}>
        {/* <button>press</button> */}
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          // color="primary"
          size="medium"
          showFirstButton
          showLastButton
          shape="rounded"
          className={classes.root}
        />
      </div>
      <Divider />
      {state.loading ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : (
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={2}>
            {state.data
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((docs) => (
                <Grid item key={docs.id} xs={3}>
                  <JobContainer title={docs.title} />
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default JobsList;
