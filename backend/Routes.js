const express=require('express');
var Routes=express.Router();
var PartientRoute=require('./Controller/Menu.Route');
var ExaminationRoute=require('./Controller/Cust.Route');

Routes.use('/view/',PartientRoute);
Routes.use('/examination/',ExaminationRoute);
module.exports = Routes;