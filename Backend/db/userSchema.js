import mongoose from "mongoose"




export const userSchema = new mongoose.Schema(
    {
        email_address: { type: String, required: true },
        Role: { type: String, default: "user" },
        username: { type: String || null },
        first_name: { type: String, default: 'Anonymus' },
        last_name: { type: String, default: 'Anonymus' },
        created_at: { type: Date, default: Date.now, required: false },
        updated_at: { type: Date, default: Date.now, required: false }

    }

)