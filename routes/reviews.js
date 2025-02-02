const express = require('express')
const router = express.Router({mergeParams: true})


const Campground = require('../models/campground')
const Review = require('../models/review')

const { reviewSchema} = require('../schemas')
const {validateReview, isLoggedIn, isReviewAuthor} = require('../middleware')
const catchAsync = require('../utilities/catchAsync')
const reviews = require('../controllers/reviews')




router.post('/', isLoggedIn ,validateReview, catchAsync(reviews.createReview));
router.delete('/:reviewId',isLoggedIn,isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router