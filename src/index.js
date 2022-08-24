const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

  
  app.use(function (req, res, next) {
      const date = new Date();
      console.log(
          date.getFullYear() +
          "-" +
          ("0" + (date.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + date.getDate()).slice(-2) +
          " " +
          ("0" + date.getHours()).slice(-2) +
          ":" +
      ("0" + date.getMinutes()).slice(-2) +
      ":" +
      ("0" + date.getSeconds()).slice(-2) +
      " , "+ req.socket.remoteAddress + 
      " , "+ req.path
      );
      next();
    });
    
    app.use("/", route);
    
    app.listen(process.env.PORT || 3000, function () {
        console.log("Express app running on port " + (process.env.PORT || 3000));
    });
    
    // app.use (
    //     function (req, res, next) {
    //         console.log ("inside GLOBAL MW");
    //         next();
    //   }
    //   );