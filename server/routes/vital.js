const router = require("express").Router();
const Vital = require("../models/Vital.model");


router.get("/vitals", async (req, res) => {
    try {
        const vitals = await Vital.find();
        res.status(200).json(vitals);
    } catch(e) {
        res.status(500).json({ message: e.message});
    }
});

router.post("/vitals", async (req, res) => {
    const { date, temperature, pulseRate, activityLevel, weight, BM, dog } = req.body;

    if ( !date || !temperature || !pulseRate || !activityLevel || !weight || !BM || !dog ) {
        res.status(400).json({ message: "missing fields"});
        return;
    }

    try {
        const response = await Vital.create({ date, temperature, pulseRate, activityLevel, weight, BM, dog });
        res.status(200).json(response);
    
    } catch(e) {
        res.status(500).json({ message: e.message})
    }
});


router.delete("/vitals/:id", async (req, res) => {
    try {
      await Vital.findByIdAndRemove(req.params.id);
      res
        .status(200)
        .json({ message: `Vital log with id ${req.params.id} was deleted.` });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  router.get("/vitals/:id", async (req, res) => {
    try {
      const response = await Vital.findById(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });


  
router.get("/vitals/:id", async (req, res) => {
    try {
      const response = await Vital.findById(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  router.put("/vitals/:id", async (req, res) => {
    const { date, temperature, pulseRate, activityLevel, weight, BM, dog } = req.body;
  
    if (!date || !temperature || !pulseRate || !activityLevel || !weight || !BM || !dog ) {
      res.status(400).json({ message: "missing fields" });
      return;
    }
  
    try {
      const response = await Vital.findByIdAndUpdate(
        req.params.id,
        { date,
          temperature,
           pulseRate,
            activityLevel,
             weight,
              BM,
               dog },
        { new: true }
      );
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

  module.exports = router;
  
