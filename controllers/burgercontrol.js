const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all(data => {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["name", "eat"], [req.body.name, req.body.sleepy], result => {

    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      sleepy: req.body.sleepy
    },
    condition,
    result => {
      if (result.changedRows === 0) {

        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

router.delete("/api/burgers/:id", (req, res) => {

  burger.delete("id", req.params.id, (data) => {
    res.json(data);
  });
});

module.exports = router;
