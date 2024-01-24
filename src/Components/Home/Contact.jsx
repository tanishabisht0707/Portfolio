import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
      <div id='Contact' className=" w-full  flex relative justify-center align-middle ">
       <div className="info" >
       <img id='robot' className=' w-30 h-60 mr-32 mt-10' src="https://ouch-cdn2.icons8.com/6Lz4B3f1imD1TvlhO7IDRCI0PyrxntODYpRs9VCtkAc/rs:fit:368:592/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTE5/L2NhYmEyY2FmLTJi/YmEtNDJmMi04Yjhj/LTQyYzk0ZGI1ZDY4/Yy5wbmc.png" />
        <div className="text items-center  w-full p-20 flex flex-col gap-10">
        <p className='text-3xl text-yellow-500'>ContactMe</p>
        <div className="social text-2xl flex flex-col gap-4">
          <p className='flex gap-4 items-center ml-1'><Link 
          to="https://linkedin.com/in/tanisha-bisht-4862a72aa"><img src="https://img.icons8.com/?size=48&id=DYoTRhf8VVC1&format=png" alt="" /></Link> Linkdin</p>
          <p className='flex gap-4 items-center ml-2'><Link 
          to="https://github.com/tanishabisht0707"><img src="https://img.icons8.com/?size=48&id=63777&format=png" alt="" /></Link> Github</p>
          <p className='flex gap-4 items-center ml-2'><Link to="https://tanishabisht007@gmail.com"><img className='w-10' src="https://img.icons8.com/?size=80&id=nQ4dZIRCI0nW&format=png" alt="" /></Link>Email</p>
        </div>
        </div>
       </div>
      </div>
  )
}

export default Contact