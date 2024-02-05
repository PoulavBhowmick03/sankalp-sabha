import mongoose from 'mongoose';

const FIRSchema = new mongoose.Schema({
    complaintFor: String,
    complaintType: String,
    location: String,
    complaintDetails: String,
    revealIdentity: Boolean,
}, {
    timestamps: true,
});

const Post = mongoose.models.FIR || mongoose.model('FIR', FIRSchema);

export default Post;
