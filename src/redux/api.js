import axios from "axios"

const YOUR_APP_ID = "d4de7ace"
const YOUR_APP_KEY = "01a096e1e9a5a55ce670f583987dd7d0"

export const getRecipe = async (query) => {
    let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
   return await axios.get(url)
}