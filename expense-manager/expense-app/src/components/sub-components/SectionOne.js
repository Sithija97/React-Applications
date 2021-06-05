import React from "react";
import "./SectionStyles.css";
import { Card, CardContent } from "@material-ui/core";

function SectionOne() {
  return (
    <div className="section_one">
      <Card className="section_one_overview_card">
        <CardContent>
          <p>sec 1</p>
        </CardContent>
      </Card>
      <br></br>
      <Card className="section_one_table_card">
        <CardContent>
          <p>sec 1</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default SectionOne;
