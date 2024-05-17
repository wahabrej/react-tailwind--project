import React from 'react'
import { CheckCircle } from 'lucide-react'
import codeimg from '../assets/code.jpg'

import { checklistItems } from "../constants";
export default function Workflow() {
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto pt-10 px-6">
        <h1 className='text-2xl text-center sm:text-3xl lg:text-4xl tracking-wide mt-10 py-3'>Accelerate your  <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{"  "}coding workflow.</span> 

        </h1>

        <div className="flex flex-wrap  pt-10 px-6 item-center justify-center">
            <img src={codeimg} className='w-2/4' alt="" />
          
                <div className="pt-12 w-full lg:w-1/2">
                    {
                        checklistItems.map((item,index)=>(
                        <div key={index} className="flex w-full  justify-center">
                          <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                          <CheckCircle  />
                          </div>
                             
                            <div className="div">
                            <h5 className="mt-1 mb-6 text-xl">{item.title}</h5>
                            <p className="text-sm text-justify p-2 mb-10 text-neutral-500">
                              {item.description}
                            </p>
                            </div>
                           

                            </div>
                        ))
                    }
              
                </div>
            </div>
        </div>
   
  )
}
