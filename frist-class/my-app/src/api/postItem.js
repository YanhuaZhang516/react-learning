import axios from "axios";

const ITEMS_URL = "http://localhost:3001/posts";
export const postItem = (item) =>
  axios
    .post(ITEMS_URL, item)
    .then((response) => response.config.data)
    .then((data) => {
      console.log(data);
    });
