const express = require('express');
const router = express.Router();

const Movie = require('../../models/movie');
router.get('/test', (req, res) => res.send('movie route testing!'));
router.get('/', (req, res) => {
    Movie.find()
      .then(movies => res.json(movies))
      .catch(err => res.status(404).json({ nomoviesfound: 'No Movies found' }));
});

router.post('/', (req, res) => {
    Movie.create(req.body)
      .then(movie => res.json({ msg: 'Movie added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this movie' }));
});


module.exports = router;