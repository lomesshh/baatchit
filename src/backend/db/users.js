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
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sagar",
    lastName: "Palkar",
    email: "sagar@gmail.com",
    username: "Sagar123",
    password: "111",
    bio: "this is my bio sagar",
    link: "https://sagar.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Carry",
    lastName: "Smith",
    email: "carry@gmail.com",
    username: "Carry123",
    password: "111111",
    bio: "this is my bio carry",
    link: "https://carry.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/boy_urhxrp.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Shah",
    email: "omkar@gmail.com",
    username: "Omkar123",
    password: "111",
    bio: "this is my bio omkar",
    link: "https://omkar.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/man_3_dfq8h3.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Gaurav",
    lastName: "Verma",
    email: "gaurav@gmail.com",
    username: "Gaurav123",
    password: "111",
    bio: "this is my bio gaurav",
    link: "https://gaurav.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/hacker_jednhr.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sunil",
    lastName: "Agarwal",
    email: "sunil@gmail.com",
    username: "Sunil123",
    password: "111",
    bio: "this is my bio suil",
    link: "https://sunil.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457645/baatchit/man_rp4ore.png",
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
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457791/baatchit/pensioner_qhagvm.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
