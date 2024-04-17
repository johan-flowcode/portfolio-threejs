const router = require("express").Router();
const { Home, About, Projects, Contact, cvModel } = require('../models/portfolioModel');

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const homes = await Home.find();
        const abouts = await About.find();
        const projects = await Projects.find();
        const contacts = await Contact.find();
        const cvModels = await cvModel.find();

        res.status(200).send({
            home: homes[0],
            about: abouts[0],
            projects: projects,
            contact: contacts[0],
            cvModel: cvModels[0],
        })
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send(error);
    }
});

module.exports = router;