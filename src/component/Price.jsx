import React from 'react'
import { CheckCircle } from 'lucide-react'

import { pricingOptions } from '../constants'
export default function Price() {
    return (
        <div className="max-w-8xl my-10 flex flex-col items-center mx-auto pt-10 px-6">
            <h2 className='text-center uppercase text-4xl sm:text-2xl'>Pricing</h2>
            <div className="flex flex-wrap mt-10  justify-center items-center">
                {pricingOptions.map((item, index) => (
                    <div className=" border border-orange-600 rounded-md mx-10 p-5 ">
                        <div className=" justify-center">
                        <span className='text-3xl ml-6'>{item.title}</span>
                        <h1 className='text-left ml-6 mt-4'>{item.price}<span className='text-xs'>/month</span></h1>
                        </div>
                        

                        
                        <ul className='mt-5'>
                            {
                                pricingOptions.map((i, index) => (
                                    <div className="flex flex-wrap justify-left items-center">
                                        <div className="text-orange-400 mx-2  bg-neutral-900 h-10 w-10 p-2  rounded-full">
                                            <CheckCircle className='text-left' />
                                        </div>
                                        <li className='align-middle text-left text-xs'>{i.features[index]}</li>

                                      
                                    </div>

                                ))
                            }

                        </ul>
                        <div className="flex justify-center mt-5"><a href="#" className="py-2 px-10 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Subscribe</a></div>
                        

                    </div>
                ))}

            </div>
        </div>
    )
}
