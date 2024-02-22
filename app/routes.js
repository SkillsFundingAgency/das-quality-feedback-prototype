//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here




// Re-direct from multiple  radios 
router.post('/exit/exit2a', function (req, res) {

    let chooseoption = req.session.data['chooseoption']
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




// Re-direct from multiple  radios 
router.post('/exit2/exit2a', function (req, res) {

    let chooseoption = req.session.data['chooseoption']
    //Option 1
    if (chooseoption === 'Yes, this is correct') {
        res.redirect('/exit2/exit3')
    }
    //Option 2
    else if (chooseoption === 'No, this is not correct') {
        res.redirect('/exit2/exit2b')
    }

    //end
})


// Sprint 50
// -----------

router.post('/sprint-50/suitability/action', function (req, res) {
    var suitability = req.session.data['suitability']

    if (suitability == "not-suitable") {
        res.redirect('/sprint-50/confirm-excluded-providers')
    }
    else {
        res.redirect('/sprint-50/select-prefered-providers')
    }
})