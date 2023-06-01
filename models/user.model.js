import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
  walletType: {
    type: String,
    required: true,
  },
  walletBalance: {
    type: String,
    required: false,
    default: 0
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false, 
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  
}, { timestamps: true });

export default mongoose.model("User", userSchema)