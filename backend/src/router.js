const express = require("express");
const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
// router.get("/projects", itemControllers.browse);
router.get("/projects", (req, res) => {
  client
    .query("select * from projects")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Route to get a specific item by ID
// router.get("/projects/:id", itemControllers.read);
router.get("/projects/:id", (req, res) => {
  client
    .query("select * from projects where id = ?", [req.params.id])
    .then(([project]) => {
      if (project[0] != null) {
        res.json(project[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
