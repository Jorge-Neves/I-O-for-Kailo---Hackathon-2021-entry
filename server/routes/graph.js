const router = require("express").Router();

router.get("/graphs", async (req, res) => {
  try {
      const vitals = await Vital.find();
      res.status(200).json(vitals);
  } catch(e) {
      res.status(500).json({ message: e.message});
  }
});


module.exports = router;
  
