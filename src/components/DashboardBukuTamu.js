import React, {useEffect} from 'react'
import Layout from '../layouts/Layout'
import IndexGuests from './IndexGuests' 
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice.js'

const DashboardBukuTamu = () => {
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
      <IndexGuests/>
    </Layout>
  )
}

export default DashboardBukuTamu