import mongoose from "mongoose"
import { userSchema } from "../db";


export const userModel = mongoose.model("users",userSchema);