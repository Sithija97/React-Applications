import React from 'react'
import "./SectionStyles.css";
import { Card, CardContent } from "@material-ui/core";

function SectionThree() {
    return (
      <div className="section_three">
        <Card className="section_three_profile_card">
          <CardContent>
            <p>sec 3</p>
          </CardContent>
        </Card>
        <br></br>
        <Card className="section_three_form_card">
          <CardContent>
            <p>sec 3</p>
          </CardContent>
        </Card>
      </div>
    );
}

export default SectionThree
