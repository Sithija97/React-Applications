import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Container,
  Grid,
  Paper,
  Button,
  Typography,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Card,
} from "@material-ui/core";
import Axios from "axios";

//importing components
import Root from "./components/Body/Root";
import img from "./components/images/img.png";

function App() {
  return (
    <div>
      <Container
        fluid="true"
        maxWidth="xl"
        style={{ background: "#fff", display: "flex" }}
      >
        <div>
          <h1 style={{ marginTop: "200px", fontSize: "4em" }}>
            Football Corner
          </h1>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            cumque, deleniti eum dignissimos aliquid assumenda labore{" "}
          </h3>
        </div>
        <img
          src={img}
          style={{
            height: "35rem",
            width: "38rem",
            position: "relative",
            left: "1rem",
          }}
          alt="Logo"
        />
      </Container>

      <Container
        fluid="true"
        maxWidth="xl"
        style={{ background: "#74b9ff", display: "flex" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={11}>
            <Paper>
              <Card style={{margin:'20px'}}>
                <CardActionArea>
                  <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={11}>
            <Paper>
            <Card style={{margin:'20px'}}>
                <CardActionArea>
                  <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container
        fluid="true"
        maxWidth="xl"
        style={{ background: "#74b9ff", display: "flex" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={11}>
            <Paper>
              <Card style={{margin:'20px'}}>
                <CardActionArea>
                  <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={11}>
            <Paper>
            <Card style={{margin:'20px'}}>
                <CardActionArea>
                  <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
