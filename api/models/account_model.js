import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
    AccountNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    AccountHolderName: {
        type: String,
        required: true,
    },
    AccountType: {
        type: String,
        required: true,
    },
    BranchName: {
        type: String,
        required: true,
    },
    IfscCode: {
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const account = mongoose.model('account', accountSchema);

export default account;
