import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-app-3bbf1.firebaseio.com/",
});

export default instance;
