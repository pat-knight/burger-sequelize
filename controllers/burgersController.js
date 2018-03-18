const express = require("express");
const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.burger.findAll({}).then(result => {
    console.log('controller 7 ' + result);
    let hbsObject = {burgers: result};
    // let oJson = result.toJSON();
    console.log(`controller 12 ${result.burger}`);
    res.render("index", { burgers: result });
  });
});

router.post("/api/burgers/", (req, res) => {
  db.burger.create({
    burger_name: req.body.burger_name
    }).then(result => {
      console.log('controller 16 ' + result);
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  db.burger.update({ 
    devoured: true,
    where: {
      id: req.params.id
    } 
    }).then(result => {
      console.log('controller 28 ' + result);
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
