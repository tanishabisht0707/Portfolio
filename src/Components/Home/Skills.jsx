import React from 'react'


function Skills() {
  return (
       <div className="Skills relative gap-5">
       <p className='text-3xl text-white  text-center '>Skills</p>
       <div className="skill rounded-xl shadow-2xl shadow-neutral-700 bg-white text-black w-96 h-80 border flex flex-row justify-between px-7 py-16 pt-24 mb-52">      
       <span className='absolute top-36 left-88 ml-10 mb-5 text-2xl text-black'>Frontend development</span> 
         <p className='text-x flex mt-4 flex-col gap-7'> 
            <span className='flex gap-2'><img className='w-6' src="https://img.icons8.com/?size=30&id=99285&format=png" alt="" />HTML</span>
            <span className='flex gap-2'><img className='w-6' src="https://img.icons8.com/?size=30&id=99285&format=png" alt="" />CSS</span>
            <span className='flex gap-2'><img className='w-6' src="https://img.icons8.com/?size=30&id=99285&format=png" alt="" />JavaScript</span>
         </p> 
         <p className='text-x flex mt-4 flex-col gap-7'> 
         <span className='flex gap-2'><img className='w-6' src="https://img.icons8.com/?size=30&id=99285&format=png" alt="" />ReactJs</span>
         <span className='flex gap-2'><img className='w-6' src="https://img.icons8.com/?size=30&id=99285&format=png" alt="" />Redux</span>
         </p>
       </div>
    </div>
  )
}

export default Skills