//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/v2/review-live-with', function (req, res) {
  const editChoice = req.session.data['review-live-with']

  if (editChoice === 'yes') {
    res.redirect('review-plan')
  } else if (editChoice === 'change') {
    res.redirect('suggest-change-live-with')
  } 
});


router.post('/v2/review-changes', function (req, res) {
  const editChoice = req.session.data['review-changes']

  if (editChoice === 'yes') {
    res.redirect('review-plan')
  } else if (editChoice === 'change') {
    res.redirect('suggest-change-changes')
  } 
});


router.post('/v3/living-visiting/where-live', function (req, res) {
  const editChoice = req.session.data['where-live']

  if (editChoice === 'With Heather') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'With Richard') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'Split equally between Heather and Richard') {
    res.redirect('split-equally')
  } else if (editChoice === 'Another arrangement') {
    res.redirect('how-often-overnight')
  }   
});


