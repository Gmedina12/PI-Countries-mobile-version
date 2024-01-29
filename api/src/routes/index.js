const express = require('express');
const router = express.Router();
const {getCountries} = require('../Controllers/getCountries');
const {getCountryById} = require('../Controllers/getCountryById');
const {getCountryByName} = require('../Controllers/getCountryByname');
const {postActivity} = require('../Controllers/postActivity')
const {getAllActivities} = require('../Controllers/getAllActivities')
const {deleteActivity} = require ('../Controllers/deleteActivities')
const {getActivityByName} = require ('../Controllers/getActivityByName')

router.get('/countries', getCountries);
router.get('/countries/name',getCountryByName)
router.get('/countries/:idPais',getCountryById)
router.post('/activities', postActivity)
router.get('/activities/name',getActivityByName)
router.get('/activities',getAllActivities)
router.delete('/activities/:idActivity', deleteActivity)

module.exports = router;
