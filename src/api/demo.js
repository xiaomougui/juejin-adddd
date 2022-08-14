import axios from "axios";
export const demoMD=()=>{
  return axios.get("http://localhost:8080/typescript_learn.md", {});
}