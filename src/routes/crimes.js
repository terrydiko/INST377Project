let express = require("express");
let crimeRouter = express.Router();
let Crime = require("../crimedb");

/*
    Create new crime
*/
crimeRouter.post("/crime", (req, res) => {
  // now we have access to req.body due to body-parser (see index.js)
  if (!req.body) {
    return resizeBy.status(400).send("Request body is missing");
  }

  console.log('HERE IN crimeRouter POST')
  console.log(req.body)

  Crime.findOne(
    {
      crimetype: req.body.crimetype,
      location: req.body.location,
      lat: req.body.lat,
      lon: req.body.lon
    },
    function (err, crime) {
      if (err) console.log(err);
      if (crime) {
        console.log("This has already been saved");
      } else {
        var crime = new Crime(req.body);
        crime.save(function (err, crime) {
          if (err) console.log(err);
          console.log("New crime created");
          res.redirect(`/`);
        });
      }
    }
  );
});

/*
    Retrieve reported crimes
*/
crimeRouter.get("/crimes", (req, res) => {
  Crime.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

/*
    Update crime 
*/
crimeRouter.put("/crime", (req, res) => {
  if (!req.query.id) {
    return res.status(400).send("Missing URL parameter id");
  }

  Crime.updateOne(
    {
      _id: req.query.id,
    },
    {
      crimetype: req.body.crimetype,
      location: req.body.location,
      lat: req.body.lat,
      lon: req.body.lon
    },
    function (err, numAffected) {
      if (err) console.log(err);
      else console.log("numAffected: " + numAffected.length);
    }
  );
});

crimeRouter.delete("/crime", (req, res) => {
  if (!req.query.id) {
    return res.status(400).send("Missing URL parameter id");
  }
  Crime.deleteOne(
    {
      crimetype: req.body.crimetype,
      location: req.body.location,
      lat: req.body.lat,
      lon: req.body.lon
    },
    function (err, result) {
      if (err) return handleError(err);
      else console.log("deleted one record");
    }
  );
});

module.exports = crimeRouter;