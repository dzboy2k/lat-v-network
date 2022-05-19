import { Navigate } from 'react-router-dom'

const PrivateRouter = ({component}) => {
  const firstLogin = localStorage.getItem('firstLogin')
  return firstLogin ? component : <Navigate to="/" />
}

export default PrivateRouter
