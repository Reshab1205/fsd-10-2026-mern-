const express = require("express");
const user = require('../models/userModel')

const register = async (req,res) => {
  try {
    const inputData = req.body
    const data = await user.create(inputData)
    
    res.send(data)
    
  } catch (err) {
    console.log(err)
  }
};

const login = async (req,res) => {
  try {
  } catch (err) {
    console.log(err)
  }
};

const fetchUsers = async (req,res) => {
  try {
  } catch (err) {
    console.log(err)
  }
};

const updateUser = async (req,res) => {
  try {
  } catch (err) {
    console.log(err)
  }
};

const deleteUser = async (req,res) => {
  try {
  } catch (err) {
    console.log(err)
  }
};

module.exports = { register, login, fetchUsers, deleteUser, updateUser };
