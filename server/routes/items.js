const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }

});


// Add /items

router.get("/:id", async (req, res, next) => {
 try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      res.send(item);
    }
    else {
      res.status(404).send({ error: "Not Found" });
    }
  } catch (error) {
    next(error);
  }

  
});
router.post("/", async (req, res) => {
  const item = await Item.create(req.body);
  const items = await Item.findAll({});
  res.json(items)
})



module.exports = router;
