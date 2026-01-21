const express = require('express');
const router = express.Router();
const Owner = require('../models/owner-model');

router.get("/", (req, res) => {
    res.send("Owners Route");
});

router.post("/create", async (req, res) => {
    try {
        if(process.env.NODE_ENV !== 'development'){
            return res.status(403).send("Route only available in development mode");
        }
        
        let owners = await Owner.find({});
        if(owners.length > 0){
            return res.status(503)
            .send("You don't have permission to create more owners in development mode");
        }
        let {fullname, email, password} = req.body;

        let createdOwner = await Owner.create({
            name: fullname,
            email,
            password,
        });
        res.status(201).json({ message: "Created Owner", owner: createdOwner });
    } catch (error) {
        console.error("Error creating owner:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;