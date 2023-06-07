import React, { useState } from 'react'

const Tickets = ({booking}) => {

    const [bookings,setBookings] = useState([])

    useState(()=>{
        setBookings( JSON.parse(localStorage.getItem('bookings')))
    },[])
  return (
    <>
    <div className="flex justify-center m-8 flex-wrap">
      <h1 className='text-xl font-bold font-black-500'>All bookings</h1>

    </div>

    <div className='flex w-full justify-center '>

      { bookings === null ?  <h1>No bookings available!</h1> : bookings.map((item)=>{
          return <div className="lg:w-1/5 md:w-1/2 p-4 mx-3 w-full shadow">
         <a className="block relative h-48 rounded overflow-hidden">
           <img alt="ecommerce" className="object-cover object-top w-full h-full block" src={item.showimg}/>
         </a>
         <div className="mt-4">
           <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.no}</h3>
           <h2 className="text-gray-900 title-font text-lg font-medium">{item.showname}</h2>
           <span className="mt-4">{item.date}/{item.showtime}</span>
         </div>
       </div>
      })}
      
    </div>
      </>
  )
}

export default Tickets
