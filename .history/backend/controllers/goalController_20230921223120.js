const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//@desc Get goals
//@route GET/api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })

  res.status(200).json(goals)
})

//@desc Set goals
//@route POST/api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })
  res.status(200).json(goal)
})

//@desc Update goals
//@route PUT/api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new error('Goal not found')
  }

  //Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  //Make sure the logged in user matches the goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updateGoal)
})

//@desc Delete goals
//@route DELETE/api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new error('Goal not found')
  }

  //Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  //Make sure the logged in user matches the goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const deleteGoal = await Goal.deleteOne({ _id: req.params.id })

  res.status(200).json(deleteGoal)
})

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoal,
}
