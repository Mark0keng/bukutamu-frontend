import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, reset } from '../features/authSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth)
  console.log(user);
  const Auth = (e) => {
    e.preventDefault()
    dispatch(loginUser({email, password}))
  }

  useEffect(() => {
    if(user || isSuccess) {
      navigate("/dashboard")
    }
    dispatch(reset())
  }, [user, isSuccess, dispatch, navigate])

  return (
    <div className='flex bg-sky-100 h-screen w-full justify-center items-center'>
      <div className='w-1/4 bg-white rounded-md px-5 shadow py-10'>
        <div className='flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#06283D" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
        <p className='text-3xl font-semibold text-blue-900 mx-2'>BukuTamu</p>
        </div>

        <form onSubmit={Auth} className='w-full py-10'>
          {isError && <p className='w-full text-red-500 text-sm my-2'>{message}</p>}
          <div className='w-full'>
            <input
              type="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className='block w-full rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 font-base focus:z-10 focus:border-2 focus:border-indigo-500 focus:outline-none focis:ring-indigo-500 sm:text-sm' 
              placeholder='Email'
              required
            />
          </div>

          <div className='w-full'>
            <input 
              type="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className='block w-full rounded-b-md border border-gray-300 px-3 py-2 mb-10 text-gray-900 font-base focus:z-10 focus:border-2 focus:border-indigo-500 focus:outline-none focis:ring-indigo-500 sm:text-sm' 
              placeholder='Password'
              required
            />
          </div>

          <button className='w-full bg-sky-500 px-3 py-2 rounded font-semibold text-white'>
            {isLoading ? 'Loading...' : 'Login'}
            </button>
        </form>
      </div>
    </div>
  )
}

export default Login