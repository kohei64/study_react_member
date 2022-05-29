import axios from "axios";

export default axios.create({
  baseURL: "https://study-go-member.herokuapp.com/", //golangのurl
});