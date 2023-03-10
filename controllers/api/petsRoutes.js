const router = require('express').Router();
const { User, Pets } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all pets
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPetData = await Pets.findAll({
      attributes: [
        'id',
        'pet_name',
        'type',
        'breed',
        'gender',
        'age',
        'description',
        'user_id'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const pets = dbPetData.map((pet) => pet.get({ plain: true }));
    res.status(200).json(pets);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get specific pet
router.get('/:id', withAuth, async (req, res) => {
  try {
    const dbPetData = await Pets.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'pet_name',
        'type',
        'breed',
        'gender',
        'age',
        'description',
        'user_id'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const singlePet = dbPetData.get({ plain: true });
    res.status(200).json({singlePet});
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Create a new pet
router.post('/', withAuth, async (req, res) => {
  try {
    const dbPetData = await Pets.create({
      pet_name: req.body.petName,
      age: req.body.petAge,
      breed: req.body.petBreed,
      type: req.body.petType,
      gender:req.body.petGender,
      description: req.body.petDescription,
      // need way to claim yours or add as adoptable in pages/form
      // user_id: req.session.req.session.user_id
    });
    res.status(200).json({ dbPetData, message: 'New Pet Created'});
  } catch (err) {
    res.status(500).json(err);
  }
});


// Update (adopt) a specific pet
router.put('/:id', withAuth, async (req, res) => {
  try {
    const dbPetData = await Pets.update({
      user_id: req.session.user_id
    },
    {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(dbPetData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);

  }
});

// Delete a specific post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.destroy({
      where:
      {id : req.params.id}
    });
    res.status(200).json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;