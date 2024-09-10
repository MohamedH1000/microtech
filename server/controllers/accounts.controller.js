import Accounts from "../models/accounts.model.js";

//@ts-ignore
export const getAccounts = async (req, res) => {
  try {
    const allAccounts = await Accounts.find({});

    res.status(200).json(allAccounts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
