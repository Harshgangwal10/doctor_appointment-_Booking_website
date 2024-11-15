import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}

        <div>
          <img className='mb-5 w-40'src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorum provident distinctio sequi repellendus vitae eum? Obcaecati iure sint architecto unde vel, omnis totam. Fuga distinctio ipsum voluptas necessitatibus quibusdam.</p>
        </div>


         {/* center section */}

         <div >
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy policy</li>
          </ul>
         </div>


          {/* right section */}

          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>+91-212-456-9090</li>
              <li>fullstackdeveloper@gmail.com</li>
            </ul>
          </div>
      </div>

       {/* CopyRight section */}
      <div>
      <hr />
      <p className='py-5 text-sm text-center'>CopyRight 2024@ Prescripto -All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer