import { useState } from 'react';
import axios from 'axios'
import {useRouter} from 'next/router'
import { useDispatch,useSelector } from 'react-redux';

export default function Login() {
  
    const [uname, setUname] = useState("");
    const [passwd, setPasswd] = useState("");
    const router= useRouter()
    const login = useSelector((state)=>state.func.login)
    const dispach=useDispatch();
    const handleSubmit = async (event) => {
      event.preventDefault()
      console.log("ok")
      setUname(uname)
      setPasswd(passwd)
      console.log(obj)
      axios.post("https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login",obj)
      .then(response => verify(response))
      .catch(err => console.log("user is invalid"))
    }
      
    const verify = (response,e) => {
      const httpcode=response.data.httpCode
      if(httpcode==200){
        dispach({type:'login'})
        if(login){
          router.push('/dashboard')
        }
        
        
      }
      else{
          e.preventdefault()
          return console.log("False")
      }
      
    }

    const obj = { 
      "email":uname,
      "password":passwd
    }

  return (
    <div id="Maindiv">
        <div id="Subdiv1">
          <h4>Login</h4>
        </div>
        <hr className="Solid"></hr>
        <div id="Subdiv2">
          <form onSubmit={handleSubmit}>
            <lable className="Lbltxt">Email</lable><br></br>
            <input className='block text-sm font-medium text-white-700 w-full bg-transparent border border-slate-500 rounded h-7 mb-4 mt-1' type="email"  value={uname} onChange = {(e)=>setUname(e.target.value)} />
            <lable className="w-full" type="password">Passowrd</lable><br></br>
            <input className='block text-sm font-medium text-white-700 w-full bg-transparent border border-slate-500 rounded h-7 mb-4 mt-1' type = 'password' id="inp"  value={passwd} onChange = {(e)=>setPasswd(e.target.value)} />
            <button className='block text-sm font-medium text-white-700 w-full bg-transparent border border-slate-500 rounded h-7 mb-8 mt-3' type ="submit" block id="Btn">Login</button>
          </form>
          
        </div>
      </div>
  )
}



