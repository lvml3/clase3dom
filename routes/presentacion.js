const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.render("presentacion", { title: "Express" });
});

module.exports = router;
