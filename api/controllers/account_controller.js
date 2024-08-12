import account from '../models/account_model.js';
import { errorHandler } from '../utils/error.js';

const addAccount = async (req, res, next) => {
    const { AccountNumber, AccountHolderName, AccountType, BranchName, IfscCode, balance } = req.body;

    if (!AccountNumber || !AccountHolderName || !AccountType || !BranchName || !IfscCode || !balance) {
        return next(errorHandler(400, 'Please provide all required fields'));
    }

    console.log("Received AccountNumber:", AccountNumber);
    console.log("Received IfscCode:", IfscCode);

    try {
        // Check if AccountNumber or IfscCode already exists
        const existingAccount = await account.findOne({
            $or: [{ AccountNumber }, { IfscCode }]
        });

        if (existingAccount) {
            const duplicateField = existingAccount.AccountNumber === AccountNumber ? 'AccountNumber' : 'IfscCode';
            return next(errorHandler(400, `Duplicate key error: ${duplicateField} already exists`));
        }

        const newAccount = new account({
            AccountNumber,
            AccountHolderName,
            AccountType,
            BranchName,
            IfscCode,
            balance
        });

        console.log("Saving new account:", newAccount);

        const savedAccount = await newAccount.save();
        res.status(201).json(savedAccount);
    } catch (error) {
        console.error("Error during account creation:", error);
        if (error.code === 11000) {
            return next(errorHandler(400, 'Duplicate key error: Account number or IFSC code already exists'));
        }
        next(error);
    }
};



const seeAccount = async (req, res, next) => {
    try {
        const accounts = await account.find();
        res.status(200).json(accounts);
    } catch (error) {
        console.error("Error during fetching accounts:", error);
        next(error);
    }
};

const updateAccount = async (req, res, next) => {
    try {
        const { AccountNumber, newBalance } = req.body; 
        if (!AccountNumber || !newBalance) {
            return res.status(400).json({ message: "AccountNumber and newBalance are required" });
        }
        const updatedAccount = await account.findOneAndUpdate(
            { AccountNumber: AccountNumber }, 
            { balance: newBalance },          
            { new: true }                     
        );

        // If no account found, return 404
        if (!updatedAccount) {
            return res.status(404).json({ message: "Account not found" });
        }

        res.status(200).json(updatedAccount); 
    } catch (error) {
        console.error("Error during updating account balance:", error);
        next(error); 
    }
};


const deleteAccount = async (req, res, next) => {
    try {
        const { AccountNumber } = req.body;
        if (!AccountNumber) {
            return res.status(400).json({ message: "AccountNumber is required" });
        }
        const deletedAccount = await account.findOneAndDelete({ AccountNumber: AccountNumber });

        if (!deletedAccount) {
            return res.status(404).json({ message: "Account not found" });
        }

        res.status(200).json(deletedAccount);
    } catch (error) {
        console.error("Error during deleting account:", error);
        next(error);
    }
}



export { addAccount , seeAccount , updateAccount , deleteAccount };
