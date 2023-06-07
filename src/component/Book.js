import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'


const Book = ({selectedShow,setBooking,booking}) => {
  let navigate = useNavigate()
  const [ticket,setTicket] = useState({no:"",date:"",showtime:"",showname:selectedShow.name,showimg:selectedShow.img})

  const bookTicket = () => {
    if (booking === []) {
      setBooking([ticket]);
    } else {
      setBooking([...booking, ticket]);
    }
    localStorage.setItem('bookings', JSON.stringify([...booking, ticket]));   
     navigate('/bookings');
  };

  const onChange = (e)=>{
    setTicket({...ticket,[e.target.name]:e.target.value})
  }

  return (
    
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{selectedShow.name}</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{selectedShow.language}</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3  mx-auto">
      <div className="flex flex-wrap flex-col justify-center items-center -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="no" className="leading-7 text-sm text-gray-600">Number of bookings</label>
            <input type="number" id="no" name="no" onChange={(e)=>{onChange(e)}} value={ticket.no} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="date" className="leading-7 text-sm text-gray-600">Date</label>
            <input type="date" id="date" name="date" onChange={(e)=>{onChange(e)}} value={ticket.date} className="w-full bg-gray-100 bg-opacity-50 w-full rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full ">
          <div className="relative">
            <div className='flex flex-col sm:justify-center items-center'>
            <label for="showtime" className="leading-7 text-sm text-gray-600">Select show</label>

            <select id='showtime' name='showtime' onChange={(e)=>{onChange(e)}} value={ticket.showtime} className="rounded border appearance-none border-gray-300 py-2 ml-2  focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
                <option>12 pm</option>
                <option>2:15 pm</option>
                <option>4:50 pm</option>
                <option>6:45 pm</option>
              </select>        
                </div>
            </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={bookTicket} className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Book</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
      
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Book
