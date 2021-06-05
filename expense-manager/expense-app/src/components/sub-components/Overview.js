import React from "react";
import './Overview.css'
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

function Overview() {
  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      className="List"
    >
      <ListItem button className="ListItem">
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary={"Inflows :" + 800} />
      </ListItem>
      <ListItem button className="ListItem">
        <ListItemIcon>
          <TrendingUpIcon />
        </ListItemIcon>
        <ListItemText primary={"Outflows :" + 200} />
      </ListItem>
      <ListItem button className="ListItem">
        <ListItemIcon>
          <SaveAltIcon />
        </ListItemIcon>
        <ListItemText primary={"Savings :" + 600} />
      </ListItem>
    </List>
  );
}

export default Overview;
