const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


// Re-direct from multiple  radios 
router.post('/exit/exit2a', function (req, res) {

    let chooseoption = req.session.data['chooseoption']

    console.log(req.session.data['chooseoption'])

    //Option 1
    if (chooseoption === 'I did not complete') {
        res.redirect('/exit/exit3')
    }
    //Option 2
    else if (chooseoption === 'I did complete') {
        res.redirect('/exit/exit2b')
    }

    //end
})