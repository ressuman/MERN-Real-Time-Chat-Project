const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    //1. Extract email and password from request body
    const { firstName, lastName, email, password, profilePic } = req.body;

    //2. If the user already exists
    const existingUser = await User.findOne({ email });

    //3. If user exists, send an error response
    if (existingUser) {
      return res.status(422).send({
        message: "User already exists.",
        success: false,
      });
    }

    //4. Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 12);

    //5. Create new user, save in DB
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profilePic,
    });

    //6. Save user in DB
    await newUser.save();

    res.status(201).send({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
};
