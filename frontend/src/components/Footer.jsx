import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='mt-20 w-full bg-[#5044E5]/4 p-5 flex justify-between'>
            <div className='w-1/4'>
                <img src={assets.logo} alt="" />
                <p className='text-xs mt-5 text-gray-500/40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum voluptatibus facilis nisi ullam! Voluptas asperiores, perferendis eius fugit aliquam velit. Aut, harum!</p>
            </div>
            <div className='flex gap-10 mt-5'>
                <div>
                    <h1 className='text-lg font-semibold'>Company</h1>
                    <ul className='mt-3 text-xs text-gray-500/60'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Support</h1>
                    <ul className='mt-3 text-xs text-gray-500/60'>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer
