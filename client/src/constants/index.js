import { Heart, Home } from "../images/svg"

const navLinks = [
    {name:"Home", path: "/"},
    {name:"Discover", path: "/movies"},
    {name:"Upcoming", path: "/upcoming"},
    {name:"Top Rated", path: "/top-rated"},
]

const navigationBar = [
    {
        name: "home",
        icon: Home,
        path: "/"
    },
    {
        name: "wishlist",
        icon: Heart,
        path: "/wishlist"
    },
]


export {navLinks, navigationBar}