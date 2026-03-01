const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true, // Custom error messages for 'unique' require a separate plugin or error handling middleware
      trim: true, // Removes accidental white spaces (e.g., " yash " becomes "yash")
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true, // Forces emails to be lowercase so "Yash@gmail.com" matches "yash@gmail.com"
      match: [ // Regex to ensure it actually looks like an email
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password must be at least 6 characters long"],
      select: false, // CRITICAL SECURITY: This hides the password when you query the user (e.g., User.find())
    },
    bio: {
      type: String,
      maxLength: [250, "Bio cannot exceed 250 characters"],
    },
    profileImage: {
      type: String,
      default: "https://ik.imagekit.io/gbr1bfkif/default_user.avif",
    },
  },
  { timestamps: true }
);



// 1. Pre-save Hook: Hash password automatically before saving
userSchema.pre("save", async function () {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified("password")) return ;
    
    this.password = await bcrypt.hash(this.password, 10);
});

// 2. Custom Method: Compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;