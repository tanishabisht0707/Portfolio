import React from 'react'
import website from '../../../Image/website.png'
import foodWeb from '../../../Image/foodWeb.png'
import petWeb from '../../../Image/petWeb.png'
import coffee from '../../../Image/coffee.png'
import shoes from '../../../Image/shoes.png'

function Projects() {
  return (
    <div className="Projects">
   <div className="project ">
      <div className="img   ">
        <img className=' rounded-xl' src={website} alt="" />
      </div>      
      {/* <div className="content w-1/2 px-10 py-2">
          <h1 className='text-2xl text-yellow-500 '>Ecommerce Website</h1>
          <p className='text-x'>Dog and cats adoption website where people can adopt rescued dogs and cats. its shows the importance of Adoption and why should we adopt animal and not to buy them. This is fully developed by using<span> Reactjs.</span></p>
        
        </div> */}
     </div>
     <div className="project ">
      <div className="img  ">
        <img className=' rounded-xl' src={shoes} alt="" />
      </div>      
      {/* <div className="content w-1/2 px-10 py-2">
          <h1 className='text-2xl text-yellow-500 '>A Food Recepe Website</h1>
          <p>Dog and cats adoption website where people can adopt rescued dogs and cats. its shows the importance of Adoption and why should we adopt animal and not to buy them. This is fully developed by using<span> Reactjs.</span></p>
        
        </div> */}
     </div>
     <div className="project">
      <div className="img  ">
        <img className=' rounded-xl' src={foodWeb} alt="" />
      </div>      
      {/* <div className="content w-1/2 px-10 py-2">
          <h1 className='text-2xl text-yellow-500 '>Pets Adoption Website</h1>
          <p>Dog and cats adoption website where people can adopt rescued dogs and cats. its shows the importance of Adoption and why should we adopt animal and not to buy them. This is fully developed by using<span> Reactjs.</span></p>
         
        </div> */}
     </div>
     <div className="project">
      <div className="img  h-full ">
        <img className=' rounded-xl' src={coffee} alt="" />
      </div>      
      {/* <div className="content w-1/2 px-10 py-2">
          <h1 className='text-2xl text-yellow-500 '>Pets Adoption Website</h1>
          <p>Dog and cats adoption website where people can adopt rescued dogs and cats. its shows the importance of Adoption and why should we adopt animal and not to buy them. This is fully developed by using<span> Reactjs.</span></p>
         
        </div> */}
     </div>
     <div className="project">
      <div className="img  ">
        <img className=' rounded-xl' src={petWeb} alt="" />
      </div>      
      {/* <div className="content w-1/2 px-10 py-2">
          <h1 className='text-2xl text-yellow-500 '>Pets Adoption Website</h1>
          <p>Dog and cats adoption website where people can adopt rescued dogs and cats. its shows the importance of Adoption and why should we adopt animal and not to buy them. This is fully developed by using<span> Reactjs.</span></p>
         
        </div> */}
     </div>
    </div>
  )
}

export default Projects