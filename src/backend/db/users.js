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
  {
    _id: uuid(),
    firstName: "aaa",
    lastName: "aaa",
    email: "aaa@gmail.com",
    username: "aaa",
    password: "aaa",
    bio: "this is my bio aaa",
    link: "https://aaa.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
