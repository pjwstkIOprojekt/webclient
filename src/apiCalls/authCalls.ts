import { LoginRequest, CreateUserRequest } from "../helpers/apiTypes";
import { post } from "./basicCalls";

// Login request
export const login = (user: Readonly<LoginRequest>) => post("login", JSON.stringify(user));

// Registers new user
export const registerUser = (user: Readonly<CreateUserRequest>) => post("register/normal", JSON.stringify(user));
