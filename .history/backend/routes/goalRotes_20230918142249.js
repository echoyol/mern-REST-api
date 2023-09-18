const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddle')

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoals)

// router.get('/', getGoals)

// router.post('/', setGoals)

// router.put('/:id', updateGoals)

// router.delete('/:id', deleteGoal)

module.exports = router
