const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandle = require('express-async-handler')
const User = require('../models/userModel')

//@desc Register new user
//@route POST/api/users
//@access Public
const registerUser = asyncHandle(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  //check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create user

  res.json({ message: 'Register User' })
})

//@desc Authenticate a user
//@route POST/api/users/login
//@access Public
const loginUser = asyncHandle(async (req, res) => {
  res.json({ message: 'Login User' })
})

//@desc Get user data
//@route GET/api/users/me
//@access Public
const getMe = asyncHandle(async (req, res) => {
  res.json({ message: 'User data display' })
})

module.exports = { registerUser, loginUser, getMe }
