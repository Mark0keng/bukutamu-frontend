import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <section className='w-4/5 mx-auto'>
        <div className='pt-24'>
          <div className='flex gap-6'>
            <div className='w-1/3 shadow-md rounded-md p-4 bg-sky-50'>
              <p className='text-xl font-semibold text-sky-800 py-3'>Pengunjung Hari Ini</p>
              <p className='text-3xl font-semibold text-sky-700 py-2'>80</p>
            </div>

            <div className='w-1/3 shadow-md rounded-md p-4 bg-sky-50'>
              <p className='text-xl font-semibold text-sky-800 py-3'>Pengunjung Minggu Ini</p>
              <p className='text-3xl font-semibold text-sky-700 py-2'>80</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home