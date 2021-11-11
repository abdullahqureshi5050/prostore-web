import { useEffect, useState } from "react";
import axios from "axios"
import { store } from "../store";
//import Cookies from 'universal-cookie';
export const Dashboard = (props)=> {
   const [dashboardState, setDashboardState] = useState('....loading')
   //const cookies = new Cookies();
  // const [tokenState, setTokenState] = useState(undefined)
  //cookies.get
  // setTokenState(props.location.token)
  axios.defaults.withCredentials = true;
   useEffect(() => {
         axios.post(`${store.APP_URL}/dashboard`, {withCredentials: true, credentials: 'include'}, {
            headers:{
               //'Content-Type': 'application/json',
               'Content-Type': 'application/x-www-form-urlencoded',
               'Accept': 'application/json',
               'Authorization': `Bearer ${props.location.token}` 
            }
         })
         .then( res => {
           // console.log(res)
            return setDashboardState(res.data);
         })
         .catch((err)=>{
            return setDashboardState(err)
         })
   }, [])
  
    return <h2>{dashboardState}</h2>;
  }
// export const Dashboard = ()=> {
//    return (<h2>Home Page</h2>);
// }