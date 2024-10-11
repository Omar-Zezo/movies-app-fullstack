import React from 'react'

const useMovieEmoji = () => {
    const emoji = (rating)=>{
        if(rating <= 40){
            return <span className='text-2xl'>&#128530;</span>
        }else if(rating > 40 && rating <= 65){
            return <span className='text-2xl'>&#129300;</span>
        }else{
            return <span className='text-2xl'>&#128525;</span>
        }
    }
    return emoji
}

export default useMovieEmoji