const jwt = require("jsonwebtoken");

const { configDotenv } = require("dotenv");
configDotenv();

const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    return res.status(400).json({ message: "Access Denied" });
  }
};

module.exports = verifyToken;
