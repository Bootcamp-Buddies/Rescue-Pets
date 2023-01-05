const router = require('express').Router();
const { Pets, User } = require('../models');
const withAuth = require('../utils/auth');

// Get all logged in pets for user, which will display on /dashboard page
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPetData = await Pets.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'pet_name',
        'type',
        'breed',
        'gender',
        'age',
        'traits',
        'favorite_game',
        'description'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const pets = dbPetData.map((pet) => pet.get({ plain: true}));
    res.render('profile', {
      pets,
      logged_in: req.session.logged_in,
      username: req.session.username
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Route for editing a users pet info from within dashboard
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const dbPetData = await Pets.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'pet_name',
        'type',
        'breed',
        'gender',
        'age',
        'traits',
        'favorite_game',
        'description'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const pets = dbPetData.get({ plain: true});
    res.render('edit-pet', {
      pets,
      logged_in: req.session.logged_in,
      username: req.session.username
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;