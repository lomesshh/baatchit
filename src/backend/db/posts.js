import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1648029766/gripping%20gears/hero3_m01qvm.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1648029766/gripping%20gears/hero2_lldbgl.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aaa",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457791/baatchit/pensioner_qhagvm.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1623320940/samples/animals/kitten-playing.gif",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Omkar123",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/man_3_dfq8h3.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1623986238/Ecommerce/animaldog_dwhghd.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Shrey123",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/boy_urhxrp.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1623986238/Ecommerce/menswatch_avs7sf.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Gaurav123",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/hacker_jednhr.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651055094/u1p52qrlqmj4flkbpxv9.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Sunil123",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457645/baatchit/man_rp4ore.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
