import axios from "axios";
import React, { useEffect, useState } from "react";

function Root() {
  const initialState = {
    loading: true,
    data: [],
  };

  const [state, setState] = useState(initialState);

  useEffect(async () => {
    await axios
      .get("https://remotive.io/api/remote-jobs?category=software-dev")
      .then((response) =>
        setState({
          loading: false,
          data: [response.data],
        })
      )
      .catch((error) => console.log(error));
  }, []);
    console.log(state);
    state.data.map(doc => {
        doc.jobs.map(job =>{console.log(job)})
    })
  return <div>Root</div>;
}

export default Root;
