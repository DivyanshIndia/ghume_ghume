import React from 'react'
import Query from './Query'

const HeroSection = () => {
    return (
        <div className=' w-full  overflow-hidden  '>
            <video
                autoPlay
                loop
                muted
                className='absolute top-0  left-0 w-full h-full object-cover '
                playsInline
            >
                <source src="/assets/video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <div className='absolute inset-0 bg-black/50'></div>


            <div className='relative z-10 flex flex-col justify-center items-center h-full w-full py-10 px-4'>

                <Query />
            </div>
        </div>
    )
}

export default HeroSection