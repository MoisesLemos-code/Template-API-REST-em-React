const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
//const data = require("./data.json");
const routes = require("./routes");

const app = express();
app.use(cors());
//AtlasDB - KoutakM
mongoose.connect('mongodb+srv://admin:2143@templatedb-7g2o6.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3333);

