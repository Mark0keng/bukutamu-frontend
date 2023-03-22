import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EditGuestModal = ({onClose, visible, id}) => {
  const [nama, setNama] = useState('')
  const [nip, setNip] = useState('')
  const [unit, setUnit] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')

  const handleOnClose = (e) => {
    if(e.target.id === "background") onClose()
  }

  useEffect(() => {
    getGuestById()
  },[visible])

  const updateGuest = async (e) => {
    e.preventDefault()
    try {
        await axios.put(`http://localhost:5000/guests/${id}`, {
            nama,
            nip,
            unit,
            phone,
            description
        })
        onClose()
    } catch(error) {
        console.log(error)
    }
  }

  const getGuestById = async (e) => {
    try {
        const response = await axios.get(`http://localhost:5000/guests/${id}`)
        setNama(response.data.nama)
        setNip(response.data.nip)
        setUnit(response.data.unit)
        setPhone(response.data.phone)
        setDescription(response.data.description)
    } catch(error) {
        console.log(error)
    }
  }

  if(!visible) return null

  return (
    <div onClick={handleOnClose} id="background" className='fixed inset-0 bg-slate-900 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-5/12 bg-white rounded shadow p-4'>
        <p className='text-xl font-bold text-sky-700'>Edit Data Tamu</p>
        <br />
        <form onSubmit={updateGuest}>
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

          <button type='submit' id='submit' onClick={handleOnClose} className='py-1 px-3 bg-sky-600 rounded text-white shadow hover:bg-sky-500'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditGuestModal