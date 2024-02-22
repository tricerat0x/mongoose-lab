const Flight = require('../models/flight');

const  index = async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.render('flights/all', { flights }); 
  } catch (err) {
    res.status(500).send(err);
  }
};

const newFlight = (req, res) => {
    res.render('flights/new');
  };
  
  const create = async (req, res) => {
    try {
      await Flight.create(req.body);
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message); 
    }
  };
  
module.exports = {index, newFlight, create}