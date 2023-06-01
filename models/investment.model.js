import mongoose from 'mongoose';
const { Schema } = mongoose;

const investmentSchema = new Schema({
  // userId: {
  //   type: String,
  //   required: true,
  // },
  investmentType: {
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
  commission: {
    type: Number,
    required: true
  },
  period: {
    type: String,
    required: true
  }
  
}, { timestamps: true });

export default mongoose.model("Investment", investmentSchema)