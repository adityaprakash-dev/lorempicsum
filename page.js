"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';


const page = () => {

  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://picsum.photos/v2/list").then((res) => {setData(res.data)})
  }

  useEffect(() => {
    getData
  }, [])

  return (
    <div className='bg-black p-5 text-white w-full '>
        <button 
        className='bg-purple-300 text-black font-semibold px-6 py-2 rounded-lg'
        onClick={getData}
        >Get data</button>

        <div className= 'bg-violet-900 w-3/4 min-h-screen mt-4 rounded-lg p-5 flex flex-wrap gap-2'>
          {data.length === 0 ? ("nothing to see here") : (data.map((elem) => {
            return (
            <>
              <img src={elem.download_url} width={200} height={200}/>
            </>
            )
          }))}
        </div>
    </div>
  )
}

export default page
