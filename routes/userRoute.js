const router = require('express').Router()

const { envoiMessage } = require('../controllers/messageanaebula')

router.post('/envoiMessage', envoiMessage)


module.exports = router