import React from "react";
import { ListItem, ListItemText, List } from "@material-ui/core";

function ToDo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.text} secondary="ToDo.." />
      </ListItem>
    </List>
  );
}

export default ToDo;
