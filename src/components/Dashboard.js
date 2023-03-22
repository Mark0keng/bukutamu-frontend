import React, { useEffect } from 'react'
import Layout from '../layouts/Layout.js'
import Home from './Home.js'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice.js'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate =  useNavigate()
  const {isError} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  useEffect(() => {
    if(isError) navigate('/login')
  }, [isError, navigate])

  return (
    <Layout>
      <Home/>
    </Layout>
  )
} 

export default Dashboard