import React, { useState } from 'react'

const Subscribe = () => {
    const [userEmail, setUserEmail] = useState("")

    const handleSubscribe = (e) => {
        e.preventDefault();         
    }

    return (
        <div className='md:w-1/2 w-[80%] m-auto mt-20 text-center border-gray-50 px-1 rounded-lg justify-center'>
            <h1 className='text-2xl'>Never Miss a Blog!</h1>
            <h6 className='text-xs mt-3 px-5 text-gray-500/60'>Subscribe to get the latest thing, new tech, and exclusive news</h6>
            <form onSubmit={handleSubscribe} style={{"padding":0, "flexDirection": "row",}} className='border-2 flex-row mt-8 w-full flex justify-between border-gray-500/10'> 
                <input value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} className='outline-0 px-1 w-3/4' type="text" placeholder="Enter your email id" />
                <button type='submit' onClick={handleSubscribe} className='bg-[#5044E5] text-white px-2 py-2 rounded-lg'>Subscribe</button>
            </form>
        </div>
    )
}

export default Subscribe
