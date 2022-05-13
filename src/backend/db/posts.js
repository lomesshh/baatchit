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
    creationDate: "09/02/2021",
    isTrending: false,
    comments: [],
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
    creationDate: "09/02/2020",
    isTrending: true,
    comments: [],
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
    creationDate: "25/02/2022",
    isTrending: true,
    comments: [],
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
    creationDate: "18/06/2020",
    isTrending: false,
    comments: [],
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
    creationDate: "08/08/2021",
    isTrending: true,
    comments: [],
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
    creationDate: "28/04/2022",
    isTrending: false,
    comments: [],
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
    creationDate: "23/12/2021",
    isTrending: true,
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1623320933/samples/bike.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Omkar123",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/man_3_dfq8h3.png",
    creationDate: "23/12/2021",
    isTrending: true,
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1623320938/samples/imagecon-group.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Shrey123",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/boy_urhxrp.png",
    creationDate: "23/03/2022",
    isTrending: false,
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1623320939/samples/cloudinary-group.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Gaurav123",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/hacker_jednhr.png",
    creationDate: "13/03/2020",
    isTrending: false,
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "This is title",
    content:
      "Ipsum quis consectetur deserunt duis mollit irure ullamco velit nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation reprehenderit in voluptate. Dolor consequat in non officia Lorem sint excepteur Lorem aliquip voluptate commodo exercitation.",
    imgSrc:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1623320930/samples/food/dessert.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Sunil123",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457645/baatchit/man_rp4ore.png",
    creationDate: "22/09/2021",
    isTrending: false,
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
