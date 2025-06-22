import { generateTextAndImage } from "./utils.js"

let name = "sandaliz"

let favoriteActivity = "watching  movies and tv series"

let favoritePlace = "anywhere with my mom or best friends"

// The higher temperature, the more random & experimental output(from 0 to 1)
let temperature = 0.6

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
