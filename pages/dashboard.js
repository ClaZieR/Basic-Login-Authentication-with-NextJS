import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import Router from 'next/router'



const dashboard = () => {
  const login = useSelector((state)=>state.func.login)
  useEffect(() => {
    if (!login) {
      Router.push('/')
    }
  }, [])

  return (
    <div>
        <h1>dashboard</h1>
    </div>
  )
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