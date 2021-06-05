import React, { useContext } from "react";
import "./SectionStyles.css";
import { Avatar, Card, CardContent } from "@material-ui/core";
import { UserContext } from "../../StateContext";
import { useHistory } from "react-router-dom";

function SectionThree() {
  const [user, sertUser] = useContext(UserContext);
  return (
    <div className="section_three">
      <Card className="section_three_profile_card">
        <h4>Profile</h4>
        <CardContent className="prfile_content">
          <img
            className="profile_picture"
            src={user === null ? <Avatar></Avatar> : user.photoURL}
            alt=""
          />
          <div className="profile_name">
            <b>{user === null ? " " : user.displayName}</b>
            <br></br>
            {user === null ? " " : user.email}
          </div>
        </CardContent>
      </Card>
      <br></br>
      <Card className="section_three_form_card">
        <CardContent></CardContent>
      </Card>
    </div>
  );
}

export default SectionThree;
