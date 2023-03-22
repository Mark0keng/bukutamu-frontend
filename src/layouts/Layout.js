import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser, reset } from '../features/authSlice'


const Layout = ({children}) => {
  const [open, setOpen] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  const logout = () => {
    dispatch(logoutUser())
    dispatch(reset())
    navigate("/login")
  }

  return (
    <React.Fragment>
      <div className='w-full flex h-full'>
        <div className={`${open ? 'w-1/6' : 'w-1/12'}` }>
        <div className='flex h-full'>
          {/* Sidebar */}
          <div className={`${open ? "w-full" : "w-20"} duration-300 bg-sky-900 relative`}>
            <span className={`absolute cursor-pointer rounded-full -right-3 top-20 border-2 bg-white border-sky-700 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokelinecape="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            </span>

            <div className='flex gap-x-4 items-center'>
              <span className=' bg-sky-400 rounded p-2.5 m-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="w-6 h-6 mx-auto">
                  <path strokelinecape="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </span>
              <h1 className={`flex text-white origin-left font-bold text-xl duration-300 ${!open && 'scale-0'}`}>Buku Tamu</h1>
            </div>

            <ul className='pt-6'>
              <a href='/dashboard'>
                <li className={`flex text-gray-50 items center gap-x-4 cursor-pointer p-4 hover:bg-sky-400 rounded m-3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokelinecape="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                  <p className={`${ !open && "hidden" } font-medium px-4 origin-left duration-200`}>Dashboard</p>
                </li>
              </a>

              <a href='/dashboard/bukutamu'>
                <li className={`flex text-gray-50 items center gap-x-4 cursor-pointer p-4 hover:bg-sky-400 rounded m-3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokelinecape="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <p className={`${ !open && "hidden" } font-medium px-4 origin-left duration-200`}>Buku Tamu</p>
                </li>
              </a>

              <li className={`flex text-gray-50 items center gap-x-4 cursor-pointer p-4 hover:bg-red-400 rounded m-3 mt-24`}>
                <button onClick={logout} className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                  <p className={`${ !open && "hidden" } font-medium px-4 origin-left duration-200`}>Logout</p>
                </button>
              </li>
            </ul>
          </div>
          {/* End Sidebar */}
        </div>
        </div>
        <div className={`${open ? 'w-5/6' : 'w-11/12'}`}>
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout