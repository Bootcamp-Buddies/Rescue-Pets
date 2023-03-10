const router = require('express').Router();
const { Pets, User } = require('../models');

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
      pets,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route for log in page
router.get('/signin', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signin');
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

// Route for about page
router.get('/about', (req, res) => {
  // If a session exists, redirect the request to the homepage
  // if (req.session.logged_in) {
  //   res.render('about');
  //   return;
  // }
  res.render('about', {
    logged_in: req.session.logged_in
  });
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
    res.render('pet', {
      pet,
      logged_in: req.session.logged_in,
      username: req.session.username,
      user_id: req.session.user_id
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({error : err, message : 'Something went wrong.'});
  }
});

module.exports = router;