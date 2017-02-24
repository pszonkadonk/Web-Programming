const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    about = {
        "name": "Michael Pszonka",
        "biography": {
            "one": "My name is Michael Pszonka and I am a first semester Computer Science Masters student at Stevens. I've been working " +
                     "as an accountant for the past few years since graduating college, but now I am very interested in transitioning into a roll " +
                    "in data science.  To that end I've decided to go to graduate school full time, while also continuing to work full time job.  This "+
                    "has been going well so far, but the schedule is brutal and I'm hoping to be able to leave my job next semester to continue " +
                    "working on my degree full time",
                    
            "two": "Been enjoying the class so far though. I've found Promises to actually be really interesting and not something that I've ever come across when I was learning some web development on my own."
        },
        "favoriteShows": ["Game of Thrones", "House of Cards", "Westworld", "Silicon Valley", "The Crown"],
        "hobbies": ["Guitar", "Working out", "Live music!!", "DOTA", "Reading"]
    }; 
    res.json(about);
});

module.exports = router;