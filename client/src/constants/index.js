import { Heart, Home } from "../images/svg"

const navLinks = [
    {name:"Home", path: "/"},
    {name:"Discover", path: "/discover"},
    {name:"Upcoming", path: "/upcoming"},
    {name:"Top Rated", path: "/top_rated"},
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

const setRatingColor = (rating)=>{
    if(rating <= 40){
      return `border-red-500`
    }else if(rating > 40 && rating <= 65){
      return "border-orange-500"
    }else{
      return "border-green-700"
    }
}



export {navLinks, navigationBar, setRatingColor}