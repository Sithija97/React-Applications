import axios from "axios";
import React, { useEffect, useState } from "react";
import JobContainer from "./JobContainer";

function Root() {
  const initialState = {
    loading: true,
    data: [],
  };

  const [state, setState] = useState(initialState);

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

  return (
    <div>
      <h3>Root 📱</h3>
      {state.data.map((docs) => (
        <h5>{docs.title}</h5>
      ))}
    </div>
  );
}

export default Root;
