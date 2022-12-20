import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import Router from 'next/router'

function ret(){
  if (login) {
    return (
      <div>
          <h1>dashboard</h1>
      </div>
    )
  }
  
}

const dashboard = () => {
  const login = useSelector((state)=>state.func.login)
  useEffect(() => {
    if (!login) {
      Router.push('/')
    }
    
  }, [])
  if (login) {
    return(
      <div>
          <h1>dashboard</h1>
      </div>     
    )

    }
}

export default dashboard


/*function dashboard (){
    return (
        <div>
        <h1>Dashboard</h1>
        </div>
        )

}

export default dashboard;*/