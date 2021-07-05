import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import JobContainer from "./JobContainer";
import { makeStyles, Divider, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
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
        <button>press</button>
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
        <CircularProgress />
      ) : (
        <div>
          {state.data
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((docs) => (
              <h5>{docs.title}</h5>
            ))}
        </div>
      )}
    </>
  );
}

export default JobsList;
