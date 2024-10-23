const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
    
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ifsc: { type: String, required: true },
    branchName: { type: String, required: true },
    bankName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    accountHolderName: { type: String, required: true },
});

const BankModel = mongoose.model('Bank', BankSchema);
module.exports = BankModel
