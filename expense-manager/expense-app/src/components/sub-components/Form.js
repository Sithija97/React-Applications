import React from 'react'
import "./Form.css";
import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
function Form() {
    return (
      <form>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"name :"} />
            <TextField
            // label="name"
            //   name="name"
            //   value={events.name}
            //   onChange={handleInputChange}
            />
          </ListItem>
          <ListItem button className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"amount :"} />
            <TextField
            //label="value"
            //   name="amount"
            //   value={events.amount}
            //   onChange={handleInputChange}
            />
          </ListItem>
          <ListItem button className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"type :"} />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   name="type"
              //   value={events.type}
              //   onChange={handleInputChange}
            >
              <MenuItem value={"income"}>income</MenuItem>
              <MenuItem value={"expense"}>expenses</MenuItem>
              <MenuItem value={"saving"}>savings</MenuItem>
            </Select>
          </ListItem>
          {/* {gettingCategory(events.type)} */}
          <ListItem button className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"date :"} />
            <TextField
              id="date"
              // label="Date"
              type="date"
              defaultValue="2021-05-01"
              className="textField"
              name="date"
              //   value={events.date}
              //   onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
          <ListItem button className="form_elements">
            <Button
              //   disabled={!events.amount}
              type="submit"
              //   onClick={handleSubmit}
            >
              Add
            </Button>
          </ListItem>
        </List>
      </form>
    );
}

export default Form
