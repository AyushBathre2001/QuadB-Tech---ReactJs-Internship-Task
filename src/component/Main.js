import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Main = ({selectedShow,setSelectedShow}) => {

    let Navigate = useNavigate()
    

    const [shows, setShows] = useState([])

    useEffect(() => {

        axios.get(process.env.REACT_APP_API).then(({ data }) => {
            setShows(data)
        })
    }, [])

    const openSummary = (img,name,language,summary,runtime)=>{
        setSelectedShow({img,name,language,summary,runtime})
        Navigate('/summary')
        
    }

    return (
        <>
        <div className="flex justify-center flex-col items-center my-8">

        <h1 className='text-2xl font-bold'>Welcome to AllShows.com</h1>
<h2>Discover and Book the Latest Shows</h2>

        </div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap justify-center -m-4">

                    {shows.map((item,index) => {
                        return <div onClick={()=>{openSummary(item.show.image.original, item.show.name,item.show.language,item.show.summary,item.show.runtime)}} key={index} className="lg:w-1/5 md:w-1/2 p-4 w-full mx-5 my-4 shadow cursor-pointer">
                            <a className="block relative h-[50vh] rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.show.image.medium} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.show.language}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.show.name}</h2>

                                <button onClick={()=>{openSummary(item.show.image.original, item.show.name,item.show.language,item.show.summary,item.show.runtime)}} className="bg-blue-800 px-2 text-white rounded mt-3">
                                    View
                                </button>
                            </div>
                        </div>



                    })}
                </div>
            </div>
        </section>
</>
    )
}




export default Main

