import axios from "axios";
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "X-Custom-Header": "foobar",
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});
