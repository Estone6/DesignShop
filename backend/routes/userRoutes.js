const express = require("express");
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
} = require("../controllers/userController");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
