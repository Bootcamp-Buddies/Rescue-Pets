const router = require('express').Router();
const { Pets, User } = require('../models/');
const withAuth = require('../utils/auth');

// All pets for User - Dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const petData = await Pets.findAll({
      where:{'user_id': req.session.userId},
      include: [User]
    });
    const pets = petData.map((pets) => pets.get({ plain: true }));
    console.log(pets);
    res.render('dashboard', {
      pets,
    });
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;