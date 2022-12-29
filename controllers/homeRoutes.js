const router = require('express').Router();
const { Pets, User } = require('../models');
const withAuth = require('../utils/auth');

// get all pets for homepage
router.get('/', async (req, res) => {
  try {
    const petsData = await Pets.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ]
    });
    // Serialize data so the template can read it
    const pets = petsData.map((pet) => pet.get({ plain: true }));
    res.render('homepage', { 
      pets,
      loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

//each pet page is shown when clicked
router.get('/pets/:id', async (req, res) => {
  try {
    const petsData = await Pets.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const pet = petsData.get({ plain: true });

    res.render('project', {
      ...pet,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//gets the profile page with Auth
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: User }],
    });

    const user = userData.get({ plain: true });

    //checks whether the user is logged in
    res.render('profile', {
      ...user,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// giving you the login and signup route pieces below
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    //gets redirected to specific page after logged in
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
