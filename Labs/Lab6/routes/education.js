const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    education = [
        {
        "schoolName": "Parsippany Hills High School",
        "degree": "High School Diploma",
        "favoriteClass": "AP Economics",
        "favoriteMemory": "Nothing in particular, just the memories of all the times in tears lauhing."
        },
        {
        "schoolName": "Rutgers University",
        "degree": "Bachelors in Finance",
        "favoriteClass": "Intro to Hebrew Bible",
        "favoriteMemory": "Favorite memory was definately Rutgersfest 2010!"
        }
    ];
    res.json(education)
});

module.exports = router;