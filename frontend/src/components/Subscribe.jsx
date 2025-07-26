import React from 'react'

const Subscribe = () => {
    return (
        <div className='w-1/2 m-auto mt-20 text-center border-gray-50 px-1 rounded-lg justify-center'>
            <h1 className='text-2xl'>Never Miss a Blog!</h1>
            <h6 className='text-xs mt-3 text-gray-500/60'>Subscribe to get the latest thing, new tech, and exclusive news</h6>
            <div className='border-2 mt-8 border-gray-500/10 px-1'> 
                <input className='outline-0' type="text" placeholder="Enter your email id" />
                <button className='bg-[#5044E5] text-white px-2 py-2 rounded-lg'>Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
