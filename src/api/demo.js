import axios from "axios";
export const demoMD=()=>{
  return axios.get("http://localhost:8081/typescript_learn.md", {});
}
export const getRightInfo = () =>{
  return axios.get("http://47.92.2.163:80/data/author",{})
}
export const getRelativeInfo = () =>{
  return axios.get("http://47.92.2.163:80/data/correlation",{})
}
// export const getTitleInfo = () => {
//   return axios.post('http://127.0.0.1:3000/data/article',{
//     params:1
//   })
// }
const instance = axios.create({
  baseURL: 'http://47.92.2.163:80',
  timeout: 10000
})
export const getTitleInfo = (url,data={})=>{
  return new Promise((resolve,reject)=>{
    instance.post(url,data,{}).then((res)=>{
      resolve(res.data)
    },err=>{
      reject(err)
    })
  })
}
