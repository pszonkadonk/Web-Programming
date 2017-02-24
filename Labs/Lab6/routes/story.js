const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    story = {
        "storyTitle": "That Time My Bitcoin Was Stolen",
        "story": "It was around January 2013 and I had recently heard of this interesting new technology called \"Bitcoin\". A technology that supporters promised would change the way we did everything...literally everything they said! A sprawling but growing community of enthusiasts fascinated by the nerdy libertarian dream of an internet based currency that was decentralized, and run independently of any federal bureaucracy. It was a novel concept but frankly other then the occasional pizza, Bitcoin transactions were carried out by two groups of people: drug dealers and currency speculators. I fell into the latter camp and decided to make a very modest $25 investment in the currency or at the time about 35% of one Bitcoin. Without going into the technical details of how Bitcoin works, it is HIGHLY recommended that one keep their Bitcoin in their own private wallet on their computer. However, I along with many other individuals decided to store their Bitcoin with an online Bitcoin brokerage, much the same way that you would with any investment account(what could go wrong!). There were numerous Bitcoin brokerages starting up, but I brilliantly decided to go with a website called Mt.Gox, which was at the time the largest Bitcoin brokerage around. Little did I know that Mt. Gox was run by a crook named Mark Karpeles living in Japan, and prior to becoming the largest Bitcoin online broker, Mt. Gox was actually an acronym better known as \"Magic: The Gathering Online Exchange.\" About 6 months after I buy my Bitcoin Mt Gox, completely shuts down, Mark Karpeles goes completely off the grid, and I along with many others became victims of what I have to imagine is one of the most successful heists in history. It turned out that over the past few years (even before I gave my bitcoin to Mt.Gox) that Mt. Gox had been the target of internet hackers, and between 2011 to mid 2013, actually had 850,000 bitcoins stolen from them, which was the equivalent of about $450 million at the time or ~$850 million now. So that is the story of how I was burned by Bitcoin and was outted what would now be about $300. There technically is a pending class action lawsuit against Mt. Gox and Mark Karpeles but I personally have decided to move on with my life and learn from my mistakes....or maybe just try Coinbase."
    };
    res.json(story)
});

module.exports = router;