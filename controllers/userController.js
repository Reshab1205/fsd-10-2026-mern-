const express = require("express");
const user = require("../models/userModel");

const register = async (req, res) => {
  try {
    const inputData = req.body;
    if(Object.keys(inputData).length === 0) {
      return res.status(404).json({message: 'Provide Details to Register'})
    }
    const emailExist = await user.findOne({ email: inputData.email });
    const mobileExist = await user.findOne({ email: inputData.mobile_number });
    const aadharExist = await user.findOne({ email: inputData.aadhar_number });

    if (emailExist || mobileExist || aadharExist) {
      return res.status(404).json({ message: "Account Already Exists" });
    }
    const data = await user.create(inputData);
    // console.log(emailExist)

    return res.status(200).json({ message: "Account Created Successfully", data:data  });
  } catch (err) {
    return res.status(500).json({message: 'Internal Server Error'})
  }
};

const login = async (req, res) => {
 try {
    const inputData = req.body;
    if(Object.keys(inputData).length === 0) {
      return res.status(404).json({message: 'Provide Details to Login'})
    }
    const emailExist = await user.findOne({ email: inputData.email });
    if (emailExist === null) {
      return res.status(404).json({ message: "Account Does not Exists" });
    }
    if(!(emailExist.password === inputData.password)) {
      return res.status(404).json({ message: "Wrong Credentials" });
    }
    return res.status(200).json({ message: "Login Successfully"});
  } catch (err) {
    return res.status(500).json({message: 'Internal Server Error'})
  }
};

const fetchUsers = async (req, res) => {
  try {
    const data = await user.find()
    return res.status(200).json({ message: "Users fetched Successfully", users:data});

  } catch (err) {
    return res.status(500).json({message: 'Internal Server Error'})
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    console.log(id)
    const inputData = req.body
    if(Object.keys(inputData).length === 0) {
      return res.status(404).json({message: 'Provide Details to Update'})
    }
    const data = await user.findByIdAndUpdate(id, inputData, {
      new:true
    })
    if(!data) {
          return res.status(404).json({message: 'User Not Found'})
    }    
    return res.status(200).json({ message: "Data Updated Successfully", updated:data});
  } catch (err) {
    return res.status(500).json({message: 'Internal Server Error'})
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    const data = await user.findByIdAndDelete(id)
    if(!data) {
          return res.status(404).json({message: 'User Not Found'})
    } 
        return res.status(200).json({ message: "Deleted Successfully"});
  } catch (err) {
    return res.status(500).json({message: 'Internal Server Error'})
  }
};

module.exports = { register, login, fetchUsers, deleteUser, updateUser };
