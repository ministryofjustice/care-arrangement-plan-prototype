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


router.post('/v3/living-visiting/where-children-live', function (req, res) {
  const editChoice = req.session.data['where-children-live']

  if (editChoice === 'With Heather') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'With Richard') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'They will spend equal time with Heather and Richard') {
    res.redirect('split-equally')
  } else if (editChoice === 'Another arrangement') {
    res.redirect('#')
  }   
});


router.post('/v3/living-visiting/how-often-overnight', function (req, res) {
  const editChoice = req.session.data['how-often-overnight']

  if (editChoice === 'There are no current plans for overnight stays') {
    res.redirect('not-overnight-time-only')
  } else if (editChoice === 'Yes, every week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'Yes, every other week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'Yes, every month') {
    res.redirect('how-often-month')
  } else if (editChoice === 'Another arrangement') {
    res.redirect('#')
  }    
});


router.post('/v3/living-visiting/not-overnight-time-only', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('make-a-plan')
  }   
});


router.post('/v3/content-1', function (req, res) {
  const editChoice = req.session.data['safe-check-1']

  if (editChoice === 'Yes') {
    res.redirect('content-2')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-1-no')
  } 
});


router.post('/v3/content-2', function (req, res) {
  const editChoice = req.session.data['safe-check-2']

  if (editChoice === 'Yes') {
    res.redirect('content-3')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-2-no')
  } 
});


router.post('/v3/living-visiting/not-overnight-stays-check', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('anything-else-detail')
  }   
});


router.post('/v3/court', function (req, res) {
  const editChoice = req.session.data['court-check']

  if (editChoice === 'Yes') {
    res.redirect('court-content')
  } else if (editChoice === 'No') {
    res.redirect('number-of-children')
  }   
});




// Version 4 //

router.post('/v4/living-visiting/where-children-live', function (req, res) {
  const editChoice = req.session.data['where-children-live']

  if (editChoice === 'With adult-a') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'With adult-b') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'equal time') {
    res.redirect('split-equally')
  } else if (editChoice === 'another arrangement') {
    res.redirect('check-your-answers')
  }   
});


router.post('/v4/living-visiting/how-often-overnight', function (req, res) {
  const editChoice = req.session.data['how-often-overnight']

  if (editChoice === 'There are no current plans for overnight stays') {
    res.redirect('not-overnight-time-only')
  } else if (editChoice === 'Yes, every week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'Yes, every other week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'another arrangement overnight') {
    res.redirect('not-overnight-time-only')
  }    
});


router.post('/v4/living-visiting/not-overnight-time-only', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('anything-else-detail-days-only')
  }   
});


router.post('/v4/content-1', function (req, res) {
  const editChoice = req.session.data['safe-check-1']

  if (editChoice === 'Yes') {
    res.redirect('content-2')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-1-no')
  } 
});


router.post('/v4/content-2', function (req, res) {
  const editChoice = req.session.data['safe-check-2']

  if (editChoice === 'Yes') {
    res.redirect('content-3')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-2-no')
  } 
});


router.post('/v4/living-visiting/not-overnight-stays-check', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('anything-else-detail')
  }   
});


router.post('/v4/court', function (req, res) {
  const editChoice = req.session.data['court-check']

  if (editChoice === 'Yes') {
    res.redirect('court-content')
  } else if (editChoice === 'No') {
    res.redirect('number-of-children')
  }   
});


router.post('/v4/send-plan-check', function (req, res) {
  const editChoice = req.session.data['send-plan-check']

  if (editChoice === 'Yes') {
    res.redirect('confirmation-plan-sent')
  } else if (editChoice === 'Not yet') {
    res.redirect('confirmation-plan-not-sent-yet')
  }   
});


// Version 5 //

router.post('/v5/living-visiting/where-children-live', function (req, res) {
  const editChoice = req.session.data['where-children-live']

  if (editChoice === 'With adult-a') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'With adult-b') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'equal time') {
    res.redirect('split-equally')
  } else if (editChoice === 'another arrangement') {
    res.redirect('check-your-answers')
  }   
});


router.post('/v5/living-visiting/how-often-overnight', function (req, res) {
  const editChoice = req.session.data['how-often-overnight']

  if (editChoice === 'There are no current plans for overnight stays') {
    res.redirect('not-overnight-time-only')
  } else if (editChoice === 'Yes, every week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'Yes, every other week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'another arrangement overnight') {
    res.redirect('not-overnight-time-only')
  }    
});


router.post('/v5/living-visiting/not-overnight-time-only', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('will-arrangements-change')
  }   
});


router.post('/v5/content-1', function (req, res) {
  const editChoice = req.session.data['safe-check-1']

  if (editChoice === 'Yes') {
    res.redirect('content-2')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-1-no')
  } 
});


router.post('/v5/content-2', function (req, res) {
  const editChoice = req.session.data['safe-check-2']

  if (editChoice === 'Yes') {
    res.redirect('content-3')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-2-no')
  } 
});


router.post('/v5/living-visiting/not-overnight-stays-check', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('will-arrangements-change')
  }   
});


router.post('/v5/court', function (req, res) {
  const editChoice = req.session.data['court-check']

  if (editChoice === 'Yes') {
    res.redirect('court-content')
  } else if (editChoice === 'No') {
    res.redirect('number-of-children')
  }   
});


router.post('/v5/send-plan-check', function (req, res) {
  const editChoice = req.session.data['send-plan-check']

  if (editChoice === 'Yes') {
    res.redirect('confirmation-plan-sent')
  } else if (editChoice === 'Not yet') {
    res.redirect('confirmation-plan-not-sent-yet')
  }   
});

router.post('/v5/living-visiting/arrangements-change', function (req, res) {
  const editChoice = req.session.data['arrangements-change']

  if (editChoice === 'Yes') {
    res.redirect('holiday-arrangement-notice')
  } else if (editChoice === 'No') {
    res.redirect('../make-a-plan')
  }  else if (editChoice === 'Dont know') {
    res.redirect('../make-a-plan')
  }   
});



// Version 6 //

router.post('/v6/living-visiting/where-children-live', function (req, res) {
  const editChoice = req.session.data['where-children-live']

  if (editChoice === 'With adult-a') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'With adult-b') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'equal time') {
    res.redirect('split-equally')
  } else if (editChoice === 'another arrangement') {
    res.redirect('check-your-answers')
  }   
});


router.post('/v6/living-visiting/how-often-overnight', function (req, res) {
  const editChoice = req.session.data['how-often-overnight']

  if (editChoice === 'There are no current plans for overnight stays') {
    res.redirect('not-overnight-time-only')
  } else if (editChoice === 'Yes, every week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'Yes, every other week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'another arrangement overnight') {
    res.redirect('not-overnight-time-only')
  }    
});


router.post('/v6/living-visiting/not-overnight-time-only', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('will-arrangements-change')
  }   
});


router.post('/v6/content-1', function (req, res) {
  const editChoice = req.session.data['safe-check-1']

  if (editChoice === 'Yes') {
    res.redirect('content-2')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-1-no')
  } 
});


router.post('/v6/content-2', function (req, res) {
  const editChoice = req.session.data['safe-check-2']

  if (editChoice === 'Yes') {
    res.redirect('content-3')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-2-no')
  } 
});


router.post('/v6/living-visiting/not-overnight-stays-check', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('will-arrangements-change')
  }   
});


router.post('/v6/court', function (req, res) {
  const editChoice = req.session.data['court-check']

  if (editChoice === 'Yes') {
    res.redirect('court-content')
  } else if (editChoice === 'No') {
    res.redirect('number-of-children')
  }   
});


router.post('/v6/send-plan-check', function (req, res) {
  const editChoice = req.session.data['send-plan-check']

  if (editChoice === 'Yes') {
    res.redirect('confirmation-plan-sent')
  } else if (editChoice === 'Not yet') {
    res.redirect('confirmation-plan-not-sent-yet')
  }   
});

router.post('/v6/living-visiting/arrangements-change', function (req, res) {
  const editChoice = req.session.data['arrangements-change']

  if (editChoice === 'Yes') {
    res.redirect('holiday-arrangement-notice')
  } else if (editChoice === 'No') {
    res.redirect('../make-a-plan')
  }  else if (editChoice === 'Dont know') {
    res.redirect('../make-a-plan')
  }   
});

// Version 7 //

router.post('/v7/living-visiting/where-children-live', function (req, res) {
  const editChoice = req.session.data['where-children-live']

  if (editChoice === 'With adult-a') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'With adult-b') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'equal time') {
    res.redirect('split-equally')
  } else if (editChoice === 'another arrangement') {
    res.redirect('../make-a-plan')
  }   
});


router.post('/v7/living-visiting/how-often-overnight', function (req, res) {
  const editChoice = req.session.data['how-often-overnight']

  if (editChoice === 'No') {
    res.redirect('not-overnight-time-only')
  } else if (editChoice === 'Yes') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'Yes') {
    res.redirect('which-days-overnight')
  } 
});


router.post('/v7/living-visiting/not-overnight-time-only', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('../make-a-plan')
  }   
});


router.post('/v7/content-1', function (req, res) {
  const editChoice = req.session.data['safe-check-1']

  if (editChoice === 'Yes') {
    res.redirect('content-2')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-1-no')
  } 
});


router.post('/v7/content-2', function (req, res) {
  const editChoice = req.session.data['safe-check-2']

  if (editChoice === 'Yes') {
    res.redirect('content-3')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-2-no')
  } 
});


router.post('/v7/living-visiting/not-overnight-stays-check', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('../make-a-plan')
  }   
});


router.post('/v7/court', function (req, res) {
  const editChoice = req.session.data['court-check']

  if (editChoice === 'Yes') {
    res.redirect('court-content')
  } else if (editChoice === 'No') {
    res.redirect('number-of-children')
  }   
});


router.post('/v7/send-plan-check', function (req, res) {
  const editChoice = req.session.data['send-plan-check']

  if (editChoice === 'Yes') {
    res.redirect('confirmation-plan-sent')
  } else if (editChoice === 'Not yet') {
    res.redirect('confirmation-plan-not-sent-yet')
  }   
});

router.post('/v7/living-visiting/arrangements-change', function (req, res) {
  const editChoice = req.session.data['arrangements-change']

  if (editChoice === 'Yes') {
    res.redirect('holiday-arrangement-notice')
  } else if (editChoice === 'No') {
    res.redirect('../items-for-changeover')
  }  
});


// Version 8 //

router.post('/v8/living-visiting/where-children-live', function (req, res) {
  const editChoice = req.session.data['where-children-live']

  if (editChoice === 'With adult-a') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'With adult-b') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'equal time') {
    res.redirect('split-equally')
  } else if (editChoice === 'another arrangement') {
    res.redirect('../make-a-plan')
  }   
});


router.post('/v8/living-visiting/how-often-overnight', function (req, res) {
  const editChoice = req.session.data['how-often-overnight']

  if (editChoice === 'No') {
    res.redirect('not-overnight-time-only')
  } else if (editChoice === 'Yes') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'Yes') {
    res.redirect('which-days-overnight')
  } 
});


router.post('/v8/living-visiting/not-overnight-time-only', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('../make-a-plan')
  }   
});


router.post('/v8/content-1', function (req, res) {
  const editChoice = req.session.data['safe-check-1']

  if (editChoice === 'Yes') {
    res.redirect('content-2')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-1-no')
  } 
});


router.post('/v8/content-2', function (req, res) {
  const editChoice = req.session.data['safe-check-2']

  if (editChoice === 'Yes') {
    res.redirect('content-3')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-2-no')
  } 
});


router.post('/v8/living-visiting/not-overnight-stays-check', function (req, res) {
  const editChoice = req.session.data['not-overnight-stays-check']

  if (editChoice === 'Yes') {
    res.redirect('which-days-daytime-visits')
  } else if (editChoice === 'No') {
    res.redirect('../make-a-plan')
  }   
});


router.post('/v8/court', function (req, res) {
  const editChoice = req.session.data['court-check']

  if (editChoice === 'Yes') {
    res.redirect('court-content')
  } else if (editChoice === 'No') {
    res.redirect('number-of-children')
  }   
});


router.post('/v8/send-plan-check', function (req, res) {
  const editChoice = req.session.data['send-plan-check']

  if (editChoice === 'Yes') {
    res.redirect('confirmation-plan-sent')
  } else if (editChoice === 'Not yet') {
    res.redirect('confirmation-plan-not-sent-yet')
  }   
});

router.post('/v8/living-visiting/arrangements-change', function (req, res) {
  const editChoice = req.session.data['arrangements-change']

  if (editChoice === 'Yes') {
    res.redirect('holiday-arrangement-notice')
  } else if (editChoice === 'No') {
    res.redirect('../items-for-changeover')
  }  
});

// Version 8 respondent 1st review//

router.post('/v8/respondent-first-review/where-live', function (req, res) {
  const editChoice = req.session.data['where-children-live-agree-q']

  if (editChoice === 'yes') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'no') {
    res.redirect('where-live-answer')
  }   
});

router.post('/v8/respondent-first-review/how-often-overnight-act', function (req, res) {
  const editChoice = req.session.data['over-night-stay-q']

  if (editChoice === 'yes') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'no') {
    res.redirect('how-often-overnight-answer')
  }   
});

router.post('/v8/respondent-first-review/which-days-overnight', function (req, res) {
  const editChoice = req.session.data['which-days-overnight-q']

  if (editChoice === 'yes') {
    res.redirect('not-overnight-time')
  } else if (editChoice === 'no') {
    res.redirect('which-days-overnight-answer')
  }   
});

router.post('/v8/respondent-first-review/not-overnight-time-act', function (req, res) {
  const editChoice = req.session.data['not-overnight-time-q']

  if (editChoice === 'yes') {
    res.redirect('responsible-for-collecting')
  } else if (editChoice === 'no') {
    res.redirect('not-overnight-time-answer')
  }   
});

router.post('/v8/respondent-first-review/responsible-for-collecting-act', function (req, res) {
  const editChoice = req.session.data['responsible-for-collecting-q']

  if (editChoice === 'yes') {
    res.redirect('handover-location')
  } else if (editChoice === 'no') {
    res.redirect('responsible-for-collecting-answer')
  }   
});


router.post('/v8/respondent-first-review/handover-location-act', function (req, res) {
  const editChoice = req.session.data['handover-location-q']

  if (editChoice === 'yes') {
    res.redirect('will-arrangements-change')
  } else if (editChoice === 'no') {
    res.redirect('handover-location-answer')
  }   
});

router.post('/v8/respondent-first-review/will-arrangements-change-act', function (req, res) {
  const editChoice = req.session.data['will-arrangements-change-q']

  if (editChoice === 'yes') {
    res.redirect('items-for-changeover')
  } else if (editChoice === 'no') {
    res.redirect('will-arrangements-change-answer')
  }   
});

router.post('/v8/respondent-first-review/items-for-changeover-act', function (req, res) {
  const editChoice = req.session.data['items-for-changeover-q']

  if (editChoice === 'yes') {
    res.redirect('plan-special-days')
  } else if (editChoice === 'no') {
    res.redirect('items-for-changeover-answer')
  }   
});

router.post('/v8/respondent-first-review/plan-special-days-act', function (req, res) {
  const editChoice = req.session.data['plan-special-days-q']

  if (editChoice === 'yes') {
    res.redirect('plan-other-things')
  } else if (editChoice === 'no') {
    res.redirect('plan-special-days-answer')
  }   
});

router.post('/v8/respondent-first-review/plan-other-things-act', function (req, res) {
  const editChoice = req.session.data['plan-other-things-q']

  if (editChoice === 'yes') {
    res.redirect('plan-last-minute-changes')
  } else if (editChoice === 'no') {
    res.redirect('plan-other-things-answer')
  }   
});

router.post('/v8/respondent-first-review/plan-last-minute-changes-act', function (req, res) {
  const editChoice = req.session.data['plan-last-minute-changes-q']

  if (editChoice === 'yes') {
    res.redirect('plan-long-term-notice')
  } else if (editChoice === 'no') {
    res.redirect('plan-last-minute-changes-answer')
  }   
});

router.post('/v8/respondent-first-review/plan-long-term-notice-act', function (req, res) {
  const editChoice = req.session.data['plan-long-term-notice-q']

  if (editChoice === 'yes') {
    res.redirect('plan-review')
  } else if (editChoice === 'no') {
    res.redirect('plan-long-term-notice-answer')
  }   
});

router.post('/v8/respondent-first-review/plan-review-act', function (req, res) {
  const editChoice = req.session.data['plan-review-q']

  if (editChoice === 'yes') {
    res.redirect('task-list')
  } else if (editChoice === 'no') {
    res.redirect('plan-review-answer')
  }   
});


