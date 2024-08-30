import { IoSearchSharp } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { RiMovieLine } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaRegPlusSquare } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";

const listMenu = [
    {
      "name": "Poste",
      "value": "5842",
      "icon": HiMiniHome,
       path: "/post"
    },
    
    {
      "name": "Followings",
      "value": "5842",
      "icon": IoSearchSharp,
      path: "/post"
    },
    {
      "name": "Découvrir",
      "value": "5842",
      "icon": FaRegCompass,
      path: "/post"
    },
        {
      "name": "Réels",
      "value": "5842",
      "icon": RiMovieLine,
      path: "/post" 
    },
    {
      "name": "Messages",
      "value": "5842",
      "icon": BiMessageRounded,
      path: "/post"
    },
    {
      "name": "Notifications",
      "value": "5842",
      "icon": CiHeart,
      path: "/post" 
    },
    {
      "name": "Créer  ",
      "value": "5842",
      "icon": FaRegPlusSquare,
      path: "/post"
    },
    {
      "name": "profil",
      "value": "5842",
      "icon": FaRegCompass,
      path: "/post" 
    }
  ];


  const suggestions = [
    {
      "id": 1,
      "name": "Dan Abrahmov",
      "photo": "https://bit.ly/dan-abramov",
      "followers":"Ryan Florence"
    },
    {
      "id": 2,
      "name": "Ryan Florence",
      "photo": "https://bit.ly/ryan-florence",
      "followers":"Ryan Florence"
    },
    {
      "id": 2,
      "name": "Ryan Florence",
      "photo": "https://bit.ly/ryan-florence",
      "followers":"Ryan Florence"
    },
    {
      "id": 2,
      "name": "Ryan Florence",
      "photo": "https://bit.ly/ryan-florence",
      "followers":"Ryan Florence"
    },
    {
      "id": 2,
      "name": "Ryan Florence",
      "photo": "https://bit.ly/ryan-florence",
      "followers":"Ryan Florence"
    },
  ];

  const posts = [
    {
      "id": 1,
      "images":"https://i.pinimg.com/564x/47/71/33/47713376bf139b945fbfaaffe4c9dc4d.jpg",
      "auteur":"bde",
      "likers":"",
      "commentaire":"",
    }
  ]

  const profile = [
    {
      "id": 1,
      "name": "Dan Abrahmov",
      "src": "https://bit.ly/dan-abramov"
    },
    {
      "id": 2,
      "name": "Ryan Florence",
      "src": "https://bit.ly/ryan-florence"
    },
    {
      "id": 3,
      "name": "Segun Adebayo",
      "src": "https://bit.ly/sage-adebayo"
    },
    {
      "id": 4,
      "name": "Kent Dodds",
      "src": "https://bit.ly/kent-c-dodds"
    },
    {
      "id": 5,
      "name": "Prosper Otemuyiwa",
      "src": "https://bit.ly/prosper-baba"
    },
    {
      "id": 6,
      "name": "Christian Nwamba",
      "src": "https://bit.ly/code-beast"
    },
    {
      "id": 7,
      "name": "Bruno Simon",
      "src": "https://bit.ly/bruno-simon"
    },
    {
      "id": 8,
      "name": "Guillermo Rauch",
      "src": "https://bit.ly/guillermo-rauch"
    },
    {
      "id": 9,
      "name": "Alexis Kallio",
      "src": "https://bit.ly/alexis-kallio"
    },
    {
      "id": 10,
      "name": "Maggie Appleton",
      "src": "https://bit.ly/maggie-appleton"
    }
  ]

  export {
    listMenu, 
    profile,
    suggestions
};