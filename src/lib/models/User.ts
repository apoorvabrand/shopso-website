import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    role: {
        type: String,
        enum: ['admin', 'user', 'manager'],
        default: 'user',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt automatically
});

const User: mongoose.Model<any> = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
