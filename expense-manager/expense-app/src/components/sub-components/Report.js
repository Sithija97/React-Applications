import React from 'react'
import { Doughnut } from "react-chartjs-2";

function Report() {
    const data = {
      labels: ["inflows", "outflows", "savings"],
      datasets: [
        {
          label: "My First Dataset",
          data: [8000, 60000, 20000],
          backgroundColor: [" #a254f2", "#ff8993 ", "#efbad3 "],
          hoverOffset: 4,
        },
      ],
    };
    return <Doughnut data={data} />;
}

export default Report
