exports.signup = async (req, res) => {
  try {
    // Here you can handle the user signup logic (e.g., saving user to DB)
    // For now, we will just send a success message.
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send("An error occurred");
  }
};
