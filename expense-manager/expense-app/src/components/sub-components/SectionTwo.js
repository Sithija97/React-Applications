import React from 'react'
import "./SectionStyles.css";
import { Card, CardContent } from "@material-ui/core";

function SectionTwo() {
    return (
      <div className="section_two">
        <Card className="section_two_card">
          <CardContent>
            <p>sec 2</p>
          </CardContent>
        </Card>
      </div>
    );
}

export default SectionTwo
