import axios from "axios"

const ITEMS_URL = 'http://localhost:3000/posts'
export const fetchItems = ()=> axios.get(ITEMS_URL).then((response)=> response.data)
