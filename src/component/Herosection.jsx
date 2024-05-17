import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import { features } from "../constants";
export default function Herosection() {
  return (
    <div>
        <div className="flex flex-col items-center max-w-7xl mx-auto pt-20 px-6">
            <h1 className='text-center text-4xl lg:text-7xl sm:text-6xl tracking-wide'>VirtualR build tools
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{"   "}for developers</span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl' >Empower your creativity and bring your VR app ideas to 
                life with our intuitive development tools. Get started today and turn your imagination into immersive reality
            </p>
            <div className="flex justify-center my-10">
              <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>Start for free</a>
              <a href="#" className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
            </div>
            <div className="flex justify-center mt-10 max-w-5xl">
              <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-500 shadow-orange-400 mx-2 my-4' src={video1}></video>
              <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-500 shadow-orange-400 mx-2 my-4' src={video2}></video>
            </div>
            <span className=" flex text-center-justify-center mt-20 uppercase">Feature</span>
          <h2 className=' text-3xl mt-10 py-3'>Easily build 

            <span className=' bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{"  "}your code</span>
          </h2>

        <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className=" mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-sm text-justify p-2 mb-10 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
            
        </div>
    
    </div>
  )
}
