import {model} from "mongoose";
import UserSchema from "../Schemas/UserSchema.js";

const User = model("User", UserSchema);

export default User;