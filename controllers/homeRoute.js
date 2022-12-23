const router = require('express').Router();
const { Pets, User } = require('../models/');
const withAuth = require('../utils/auth');

// get all pets for homepage
router.get('/', async (req, res) => {
  try {
    const petsData = await Pets.findAll({
      where:{'user_id': null},
      include: [User]
    });
    const pets = petsData.map((pet) => pet.get({ plain: true }));
    res.render('homepage', { pets, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

// giving you the login and signup route pieces below
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;
