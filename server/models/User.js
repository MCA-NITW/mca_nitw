import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 120,
    },
    // Seeded alumni profiles have no password; only signed-up users do.
    // select: false keeps the hash out of every query unless asked for.
    passwordHash: { type: String, select: false },
    institute: { type: String, default: "NIT Warangal", trim: true },
    batch: { type: String, trim: true, maxlength: 20 },
    company: { type: String, trim: true, maxlength: 80 },
    designation: { type: String, trim: true, maxlength: 80 },
    location: { type: String, trim: true, maxlength: 80 },
    linkedin: { type: String, trim: true, maxlength: 200 },
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform: (_doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    delete ret.passwordHash;
    return ret;
  },
});

const User = mongoose.model("User", userSchema);

export default User;
