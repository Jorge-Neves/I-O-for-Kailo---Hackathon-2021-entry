const router = require("express").Router();
const Appointment = require("../models/Appointment");
const Dog = require("../models/Dog.model");
const Weekly = require("../models/Weekly.model");
const Vaccine = require("../models/Vaccine")


router.get("/dogs", async (req, res) => {
    try {
        const dogs = await Dog.find();
        res.status(200).json(dogs);
    } catch(e) {
        res.status(500).json({ message: e.message});
    }
});

router.post("/dogs", async (req, res) => {
    const { name, breed, age, weight, size } = req.body;

    if (!name || !breed || !age || !weight || !size ) {
        res.status(400).json({ message: "missing fields"});
        return;
    }

    try {
        const response = await Dog.create({ name, breed, age, weight, size });
        res.status(200).json(response);
    
    } catch(e) {
        res.status(500).json({ message: e.message})
    }
});


router.delete("/dogs/:id", async (req, res) => {
    try {
      await Dog.findByIdAndRemove(req.params.id);
      res
        .status(200)
        .json({ message: `Dog with id ${req.params.id} was deleted.` });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  router.get("/dogs/:id", async (req, res) => {
    try {
      const response = await Dog.findById(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });


  
router.get("/dogs/:id", async (req, res) => {
    try {
      const response = await Dog.findById(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  router.put("/dogs/:id", async (req, res) => {
    const { name, breed, age, weight, size } = req.body;
  
    if (!name || !breed || !age || !weight || !size) {
      res.status(400).json({ message: "missing fields" });
      return;
    }
  
    try {
      const response = await Dog.findByIdAndUpdate(
        req.params.id,
        {
          title,
          description,
          name,
          breed,
          age, 
          weight, 
          size
        },
        { new: true }
      );
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

  router.get("/weekly", async (req, res) => {
    try {
      const response = await Weekly.find();
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  router.put("/weekly", async (req, res) => {
    const { monday, tuesday, wednesday, thursday, friday } = req.body;
  
    if (!monday|| !tuesday || !wednesday || !tuesday || !friday) {
      res.status(400).json({ message: "missing fields" });
      return;
    }
  
    try {
      const response = await Weekly.findOneAndUpdate(
        {},
        { monday, tuesday, wednesday, thursday, friday },
        { new: true }
      );
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });


  router.get("/appointments", async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch(e) {
        res.status(500).json({ message: e.message});
    }
});

router.post("/appointments", async (req, res) => {
    const { date, description } = req.body;

    if (!date || !description) {
        res.status(400).json({ message: "missing fields"});
        return;
    }

    try {
        const response = await Appointment.create({ date, description } );
        res.status(200).json(response);
    
    } catch(e) {
        res.status(500).json({ message: e.message})
    }
});


router.delete("/appointments/:id", async (req, res) => {
    try {
      await Appointment.findByIdAndRemove(req.params.id);
      res
        .status(200)
        .json({ message: `Appointment with id ${req.params.id} was deleted.` });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  router.get("/appointments/:id", async (req, res) => {
    try {
      const response = await Appointment.findById(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });


  
router.get("/appointments/:id", async (req, res) => {
    try {
      const response = await Appointment.findById(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  router.put("/appointments/:id", async (req, res) => {
    const { date, description } = req.body;
  
    if (!date || !description) {
      res.status(400).json({ message: "missing fields" });
      return;
    }
  
    try {
      const response = await Appointment.findByIdAndUpdate(
        req.params.id,
        {
          date,
          description,
        },
        { new: true }
      );
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });


  
  router.get("/appointments", async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch(e) {
        res.status(500).json({ message: e.message});
    }
});

router.post("/appointments", async (req, res) => {
    const { date, description } = req.body;

    if (!date || !description) {
        res.status(400).json({ message: "missing fields"});
        return;
    }

    try {
        const response = await Appointment.create({ date, description } );
        res.status(200).json(response);
    
    } catch(e) {
        res.status(500).json({ message: e.message})
    }
});


router.delete("/vaccines/:id", async (req, res) => {
    try {
      await Vaccine.findByIdAndRemove(req.params.id);
      res
        .status(200)
        .json({ message: `Vaccine with id ${req.params.id} was deleted.` });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  router.get("/vaccines/:id", async (req, res) => {
    try {
      const response = await Vaccine.findById(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });


  
router.get("/vaccines/:id", async (req, res) => {
    try {
      const response = await Vaccine.findById(req.params.id);
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  
  router.put("/vaccines/:id", async (req, res) => {
    const { date, description } = req.body;
  
    if (!date || !description) {
      res.status(400).json({ message: "missing fields" });
      return;
    }
  
    try {
      const response = await Vaccine.findByIdAndUpdate(
        req.params.id,
        {
          date,
          description,
        },
        { new: true }
      );
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

  module.exports = router;
  