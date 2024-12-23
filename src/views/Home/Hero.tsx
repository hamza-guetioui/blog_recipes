import React from 'react'

const Hero = () => {
  return (
    <div className='relative min-h-[50vh] overflow-hidden flex flex-col items-center justify-center gap-4 text-center px-80 py-12 pb-24 bg-slate-100'>
        <h1 className='text-6xl font-bold'>Food that makes memories</h1>
        <p>Simple home cooking that tastes good and brings everyone to the table. Food that makes dinner time better and keeps the family talking longer.</p>
        <div className='absolute -bottom-5 translate-y-1/2  left-0 w-full scale-x-110 h-24 bg-white rounded-[100%]'></div>
    </div>
  )
}

export default Hero 