const router = require('express').Router();
const { Pets, User } = require('../models/');

// Get all unadopted pets data to display on / homepage - route to homepage
router.get('/', async (req, res) => {
  try {
    const dbPetData = await Pets.findAll({
      where: {
        user_id: null
      }
    });
    const pets = dbPetData.map((pet) => pet.get({ plain: true }));
    res.render('homepage', {
      pets
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route for log in page
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Route for sign up page
router.get('/signup', (req, res)=> {
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route for a single clicked pet
router.get('/pets/:id', async (req, res) => {
  try {
    const dbPetData = await Pets.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const pet = dbPetData.get({ plain: true });
    res.render('single-pet', {
      pet,
      logged_in: req.session.logged_in,
      username: req.session.username
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({error : err, message : 'Something went wrong.'});
  }
});

module.exports = router;
