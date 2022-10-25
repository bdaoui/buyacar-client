import React from 'react'
import {bg} from '../assets/bg_car.jpg'

const Header = () => {
  return (
    <div className='h-screen'>
    <div className='bg-car bg-center bg-no-repeat bg-cover w-full h-1/4 md:h-full'>
    <div className='flex flex-col justify-center w-full md:w-2/4 m-auto h-screen text-center text-black md:text-white font-semibold'>
      <div className='backdrop-blur-sm rounded-2xl bg-emerald/50 h-2/4 flex flex-col justify-center'>
            <h1 className='p-2 text-sm md:text-xl lg:text-5xl font-bold'>Welcome to Buy A Car</h1>
            <h4 className='p-2 text-sm md:text-lg lg:text-2xl font-semibold'>We provide cars of the highest quality so do not hesitate to get in touch and book a viewing now</h4>
            <p className='p-2 text-sm lg:text-base'>fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Header