import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  id: { type: String, required: true },
  Acc_Number: { type: Number, required: true },
  ACC_Parent: { type: Number, required: true },
  Balance: { type: Number, required: true },
});

const Accounts = mongoose.model("User", AccountSchema);

export default Accounts;
