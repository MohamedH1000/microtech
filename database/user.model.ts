import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  id: string;
  Acc_Number: number;
  ACC_Parent: number;
  Balance: number;
}

const AccountSchema = new Schema({
  id: { type: String, required: true },
  Acc_Number: { type: Number, required: true },
  ACC_Parent: { type: Number, required: true },
  Balance: { type: Number, required: true },
});

const Accounts = models.Accounts || model("User", AccountSchema);

export default Accounts;
