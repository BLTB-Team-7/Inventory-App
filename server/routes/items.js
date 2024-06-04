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
  try {
  await Item.create(req.body);
  const items = await Item.findAll({});
  res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
     const item = await Item.findByPk(req.params.id);
     if (item) {
      await item.destroy();
       res.status(204).send();
     }
     else {
       res.status(404).send({ error: "Not Found" });
     }
   } catch (error) {
     next(error);
   }
  });



  
module.exports = router;
