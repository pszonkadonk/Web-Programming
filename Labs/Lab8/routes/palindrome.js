const express = require('express')
const router = express.Router();
const data = require('../data/index')
const palindrome = data.palindrome


router.get('/', (req,res) => {
    res.render('palindrome/static');
    console.log("in get");
});

router.post('/', (req,res) => {
    
    let testValue = req.body.palindrome;
    console.log(testValue);

    try {
        if(palindrome.isPalindrome(testValue)) {
            isPalindrome = true;
            console.log("true");
        } 
        else {
            isPalindrome = false;
            console.log("false");
        }
    } catch(e) {
        console.log("caught error");
        res.render('palindrome/server', {isPalindrome: false, errror: e});    
        return;
    }

    res.render('palindrome/server', {isPalindrome: isPalindrome});
});


module.exports = router;