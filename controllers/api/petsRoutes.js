const router = require('express').Router();
const { Pets } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPets = await Pets.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPets);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const petsData = await Pets.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!petsData) {
      res.status(404).json({ message: 'No pets found with this id!' });
      return;
    }

    res.status(200).json(petsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
