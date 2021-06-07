import React, { useEffect, useState } from "react";
import "./SectionStyles.css";
import { Card, CardContent } from "@material-ui/core";
import Overview from "./Overview";
import Transactions from "./Transactions";
import db, { auth } from "../firebase";

function SectionOne() {
  return (
    <div className="section_one">
      <Card className="section_one_overview_card">
        <h4>Overview</h4>
        <CardContent>
          <Overview />
        </CardContent>
      </Card>
      <br></br>
      <Card className="section_one_table_card">
        <h4>Past Transactions</h4>
        <CardContent>
          <Transactions/>
        </CardContent>
      </Card>
    </div>
  );
}

export default SectionOne;
