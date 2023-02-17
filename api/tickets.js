const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).json([
      {id: 1,title: 'Basic', price: 1, duration: 7, type: ['Views', 'Featured', 'Private Pod']},
      {id: 2,title: 'Premier', price: 3.1, duration: 21, type: ['Views', 'Featured', 'Private Terra']},
      {id: 3,title: 'Lonsdaleite', price: 7.1, duration: 30, type: ['Views Plus', 'Featured Plus', 'MDRS']}
    ])
  } catch (error) {
    console.error(error)
    return res.status(500).send("Server error")
  }
})

module.exports = router