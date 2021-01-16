const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoutes = require('./routes/posts');

const app = express();

// middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/MemoryApp";
const PORT = process.env.PORT || 3000;

// server listening
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

// db connection
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database Connected Successfully !"))
  .catch((error) => console.log("error: " + error));

// to avoid warnings
mongoose.set("useFindAndModify", true);
