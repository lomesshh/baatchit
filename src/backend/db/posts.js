import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    title: "Cars for life",
    content:
      "This is one of my favorite paintings that I have done, called “Model A at the Barn.” It is a painting of a 1929 Ford Model A at a barn.",
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
    title: "Save Trees",
    content:
      "3 trillion trees are cut down in the last 40 years. Because of the climate change, humans are going to suffer the most, and maybe get extinct Microorganisms, plants, birds, animals, glaciers, mountains, rivers, lakes, and oceans have a track record of regrowing themselves.",
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
    title: "Cars for life",
    content:
      "This is one of my favorite paintings that I have done, called “Model A at the Barn.” It is a painting of a 1929 Ford Model A at a barn.",
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
    title: "Pets for life",
    content:
      "Dogs don’t make judgments about physical appearance or abilities, and they don’t care how big your house is or what you do for a living. They care about the quality of your character and your capacity to love.",
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
    username: "Carry123",
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
    title: "Watches are love",
    content:
      "Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it, you can never get it back.",
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
    title: "Desert",
    content:
      "Baking may be regarded as a science, but it's the chemistry between the ingredients and the cook that gives desserts life. Baking is done out of love, to share with family and friends, to see them smile.",
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
    title: "Life is unpredictable",
    content:
      "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.",
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
    username: "Carry123",
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
    title: "Trips are fun",
    content:
      "Kpatawee Waterfalls is the ideal location for a weekend getaway. Looking at nature at its best is both relaxing and amazing. Bring your friends and family.",
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
    title: "Sweet dish",
    content:
      "You don't just change your whole life in one big step. It's the small things you do every day that pull over to the big things, like taking yourself out for coffee and eating a really good dessert when you're depressed could be the start to living a fulfilled life.",
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
