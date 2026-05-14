const express = require("express");
const user = require("../models/userModel");

const register = async (req, res) => {
  try {
    const inputData = req.body;
    const emailExist = await user.findOne({ email: inputData.email });
    const mobileExist = await user.findOne({ email: inputData.mobile_number });
    const aadharExist = await user.findOne({ email: inputData.aadhar_number });

    if (emailExist || mobileExist || aadharExist) {
      return res.status(404).json({ message: "Email Already Exists" });
    }
    const data = await user.create(inputData);
    // console.log(emailExist)

    return res.status(200).json({ message: "Account Created Successfully", data:data  });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const fetchUsers = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

module.exports = { register, login, fetchUsers, deleteUser, updateUser };
