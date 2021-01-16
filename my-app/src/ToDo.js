import React from "react";
import { ListItem, ListItemText, List, Button, Card, CardContent, colors } from "@material-ui/core";
import db from "./firebase";

function ToDo(props) {
  return (
    <List>
      <ListItem>
        <Card>
          <CardContent>
            <ListItemText primary={props.todo.todo} secondary="ToDo.." />
            <Button
              style={{backgroundColor:'#9fa8da', color:'white'}}         
              onClick={(event) =>
                db.collection("todos").doc(props.todo.id).delete()
              }
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      </ListItem>
    </List>
  );
}

export default ToDo;
