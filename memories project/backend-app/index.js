import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// routes
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb://localhost:27017/memories";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connceted successfully");
  })
  .catch((err) => {
    console.log("err: " + err);
  });

app.listen(PORT, () => {
  console.log("Server connected to port 5000");
});

mongoose.set("useFindAndModify", false);
