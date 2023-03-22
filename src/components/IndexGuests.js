import React, { useEffect, useState } from "react";
import axios from "axios"
import moment from "moment"
import ReactPaginate from "react-paginate";
import AddGuestModal from "./AddGuestModal";
import EditGuestModal from "./EditGuestModal";

const IndexGuests = () => {
    const [guests, setGuest] = useState([])
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [totalPage, setTotalPage] = useState(0)
    const [totalRow, setTotalRow] = useState(0)
    const [search, setSearch] = useState("")
    const [message, setMessage] = useState("")
    const [showModalAdd, setShowModalAdd] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [modalId, setModalId] = useState("")

    useEffect(() => {
        getGuests()
    }, [page, search, showModalAdd, showModalEdit])

    const getGuests =  async () => {
        const response = await axios.get(`http://localhost:5000/guests?search=${search}&page=${page}&limit=${limit}`)
        setGuest(response.data.result)
        setPage(response.data.page)
        setTotalPage(response.data.totalPage)
        setTotalRow(response.data.totalRow)
    }

    const searchData = (e) => {
        e.preventDefault()
        setPage(0)
        setSearch(search)
    }

    const changePage = ({selected}) => {
        setPage(selected)
        if(selected === 9) {
            setMessage("Jika belum menemukan data yang dicari, Silahkan cari lewat kolom pencarian dengan keyword lebih spesifik!")
        } else {
            setMessage("")
        }
    }

    const deleteGuest = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/guests/${id}`)
            getGuests()
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="w-full mt-24">
                <div className="flex justify-between w-11/12 mx-auto ">
                    <div className="w-1/3">
                        <button onClick={() => setShowModalAdd(true)} className="py-2 px-3 font-medium text-white bg-green-500 rounded shadow hover:bg-green-400">Tambah Tamu</button>
                    </div>
                    <div className="w-1/3 mt-1 flex rounded-md shadow-sm">
                        <form onSubmit={searchData} className="w-full">
                            <input 
                                type="text" 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-3 py-2 border rounded-none rounded-l-md border-gray-300 focus:outline-none focus:ring-primary focus:ring-1 focus:border-indigo-400 sm:text-sm" 
                                placeholder="Cari data..."
                            />
                        </form>
                        
                        <button className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-sky-700 hover:bg-sky-600 px-4 text-sm text-white">    
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-16">
                    <table className="border-collapse table-auto w-11/12 text-sm self-center">
                        <thead>
                            <tr>
                                <th className="border-b text-base dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">#</th>
                                <th className="border-b text-base dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Tanggal</th>
                                <th className="border-b text-base dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Nama</th>
                                <th className="border-b text-base dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Unit</th>
                                <th className="border-b text-base dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">No.Telepon</th>
                                <th className="border-b text-base dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Keperluan</th>
                                <th className="border-b text-base dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800">
                            {guests.map((guest, index) => (
                            <tr key={guest.id}>
                                <td className="border-b text-base  border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{guest.id}</td>
                                <td className="border-b text-base border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{moment(guest.created_at).format('DD MMMM YYYY')}</td>
                                <td className="border-b text-base border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{guest.nama}</td>
                                <td className="border-b text-base border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{guest.unit}</td>
                                <td className="border-b text-base border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{guest.phone}</td>
                                <td className="border-b text-base border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{guest.description}</td>
                                <td className="border-b text-base border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                    <button 
                                        onClick={() => {
                                            setShowModalEdit(true)
                                            setModalId(guest.id)
                                            }} 
                                        className="bg-yellow-400 p-1 rounded hover:bg-yellow-300 mr-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white " className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </button>
                                    
                                    <button onClick={() => deleteGuest(guest.id)} className="bg-red-500 p-1 rounded hover:bg-red-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="w-4/5 mx-auto pt-8 text-red-500 font-medium">{message}</p>
                <nav className="flex justify-between w-4/5 mx-auto pt-8 pb-12">
                    <p>Total Baris: <span className="font-medium">{totalRow}</span> Halaman: {totalRow ? page + 1 : 0} dari {totalPage}</p>
                    <ReactPaginate
                        className="inline"
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={Math.min(10, totalPage)}
                        onPageChange={changePage}
                        pageClassName={"inline"}
                        previousClassName={"inline"}
                        breakClassName={"inline"}
                        nextClassName={"inline"}
                        previousLinkClassName={"items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                        pageLinkClassName={"items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                        breakLinkClassName={"inline items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                        nextLinkClassName={"items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                        activeLinkClassName={"z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"}
                    />
                </nav>
            </div>            
            <AddGuestModal 
                onClose={() => setShowModalAdd(false)} 
                visible={showModalAdd}
            />

            <EditGuestModal 
                onClose={() => {
                    setShowModalEdit(false)
                    setModalId("")
                }} 
                visible={showModalEdit} 
                id={modalId}
            />
        </div>
    )
}

export default IndexGuests