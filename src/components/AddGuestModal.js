import React, { useState } from 'react'
import axios from 'axios'

const AddGuestModal = ({ visible, onClose}) => {
  const [nama, setNama] = useState('')
  const [nip, setNip] = useState('')
  const [unit, setUnit] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')

  const handleOnClose = (e) => {
    if(e.target.id === "background") onClose()
  }

  if(!visible) return null

  const saveGuest = async (e) => {
    e.preventDefault()
    try {
        await axios.post('http://localhost:5000/guests', {
            nama,
            nip,
            unit,
            phone,
            description
        })
        onClose()
        setNama('')
        setNip('')
        setUnit('')
        setPhone('')
        setDescription('')
    } catch(error) {
        console.log(error)
    }
}

  return (
    <div onClick={handleOnClose} id='background' className='fixed inset-0 bg-slate-900 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-5/12 bg-white rounded shadow p-4'>
        <p className='text-xl font-bold text-sky-700'>Tambah Data Tamu</p>
        <br />
        <form onSubmit={saveGuest}>
          <div className='field py-3'>
            <label className='font-semibold text-slate-600'>Nama</label>
            <input 
              type="text" 
              value={nama} 
              onChange={(e) => setNama(e.target.value)} 
              className='block w-full bg-slate-100 py-1 px-3 rounded focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400' 
              required 
            />
          </div>
          
          <div className='field py-3'>
            <label className='font-semibold text-slate-600'>NIP/NIM</label>
            <input 
              type="text" 
              value={nip} 
              onChange={(e) => setNip(e.target.value)} 
              className='block w-full bg-slate-100 py-1 px-3 rounded focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400' 
              required 
            />
          </div>

          <div className='field py-3'>
            <label className='font-semibold text-slate-600'>Unit</label>
            <input 
              type="text" 
              value={unit} 
              onChange={(e) => setUnit(e.target.value)} 
              className='block w-full bg-slate-100 py-1 px-3 rounded focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400' 
              required 
            />
          </div>

          <div className='field py-3'>
            <label className='font-semibold text-slate-600'>No.Telepon</label>
            <input 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              className='block w-full bg-slate-100 py-1 px-3 rounded focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400' 
              required 
            />
          </div>

          <div className='field py-3'>
            <label className='font-semibold text-slate-600'>No.Telepon</label>
            <textarea 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              cols="30"
              rows="10"
              className='block w-full bg-slate-100 py-1 px-3 rounded focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400' 
              required 
            />
          </div>

          <button type='submit' onClick={handleOnClose} className='py-1 px-3 bg-sky-600 rounded text-white shadow hover:bg-sky-500'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddGuestModal