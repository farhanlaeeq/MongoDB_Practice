const User = require("../Models/UserModel");

exports.GetUsers = async (req, res, next) => {
  try {
    res.json({
      message: "User logged in successfully",
      IsSuccess: true,
      Status_Code: 200,
      Data: null,
    });
  } catch (error) {
    res.json({
      message: "Server Error!",
      IsSuccess: false,
      Status_Code: 500,
      Data: error,
    });
  }
};

exports.SaveUser = async (req, res, next) => {
  try {
    const data = {
      EmailAddress: req.body.EmailAddress,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Password: req.body.Password,
      DOB: new Date(req.body.DOB),
      IsActive: true,
      IsDelete: false,
      CreatedOn: new Date(),
      ModifiedOn: null,
    };
    const newUser = await User.create(data);
    res.json({
      message: "User created successfully",
      IsSuccess: true,
      Status_Code: 200,
      Data: newUser,
    });
  } catch (error) {
    res.json({
      message: "Server Error!",
      IsSuccess: false,
      Status_Code: 500,
      Data: error,
    });
  }
};

exports.EditUser = async (req, res, next) => {
  try {
    res.json({
      message: "User logged in successfully",
      IsSuccess: true,
      Status_Code: 200,
      Data: null,
    });
  } catch (error) {
    res.json({
      message: "Server Error!",
      IsSuccess: false,
      Status_Code: 500,
      Data: error,
    });
  }
};

exports.DeleteUser = async (req, res, next) => {
  try {
    res.json({
      message: "User logged in successfully",
      IsSuccess: true,
      Status_Code: 200,
      Data: null,
    });
  } catch (error) {
    res.json({
      message: "Server Error!",
      IsSuccess: false,
      Status_Code: 500,
      Data: error,
    });
  }
};
