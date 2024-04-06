// adminMiddleware.js

// Admin credentials
const adminUsername = "admin";
const adminPassword = "12345";

// Admin login middleware
const adminLoginMiddleware = (req, res, next) => {
  const { username, password } = req.body;

  // Check if username and password match admin credentials
  if (username === adminUsername && password === adminPassword) {
    // If login is successful, proceed to the next middleware
    next();
  } else {
    res.status(401).json({ message: "Invalid username or password" });
    
  }
};

module.exports = { adminLoginMiddleware };
