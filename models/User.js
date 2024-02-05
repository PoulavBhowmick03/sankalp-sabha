import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
        },
        nullyToken: {
            type: String,
        },
        role: {
            type: String,
            default: "user",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
