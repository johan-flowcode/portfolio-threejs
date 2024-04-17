const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    backgroundImage: {
        type: String,
        required: true,
        default: '/img/imagen5.png'
    }
});

const aboutSchema = new mongoose.Schema({
   
    description: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },
});

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },

});

const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },

});

const cvSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
    },
});



module.exports = {
    Home: mongoose.model("homes", homeSchema),
    About: mongoose.model("abouts", aboutSchema),
    Experience: mongoose.model("experiences", experienceSchema),
    Projects: mongoose.model("projects", projectsSchema),
    Contact:mongoose.model("contacts",contactSchema),
    cvModel: mongoose.model("cvModels", cvSchema),
}