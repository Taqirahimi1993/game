import axios from "axios";

export interface FetchResponse<T>{
  count:number;
  results:T[]

}

export default axios.create({
  
  baseURL:"https://api.rawg.io/api",
  params:{
    key:"f1fc4a4bbe034536a98fd4d34f2fd616"
  }
})