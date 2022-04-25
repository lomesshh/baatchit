import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "balika@gmail.com",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "this is my bio balika",
    link: "https://adarshbalika.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
