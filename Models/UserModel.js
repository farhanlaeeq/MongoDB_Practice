const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    EmailAddress: {
      type: String,
      required: [true, "Email Address is required."],
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    FirstName: {
      type: String,
      required: [true, "First Name is required."],
    },
    LastName: {
      type: String,
      required: [true, "Last Name is required."],
    },
    Password: {
      type: String,
      require: [true, "Please provide a password."],
      minLength: [8, "Password must be atleast 8 characters long!"],
      // select: false,
    },
    DOB: {
      type: Date,
      require: [true, "Please provide a DOB."],
    },
    IsActive: {
      type: Boolean,
    },
    IsDelete: {
      type: Boolean,
    },
    CreatedOn: {
      type: Date,
    },
    ModifiedOn: {
      type: Date,
    },
  },
  {
    // Specify the collection name explicitly
    collection: "Users",
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
