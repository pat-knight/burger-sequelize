const express = require("express");
const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all(result => {
    res.render("index", { burgers: result });
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["burger_name"], [req.body.burger_name], result => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.update({ devoured: true }, `id=${req.params.id}`, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
