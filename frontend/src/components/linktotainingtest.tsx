import React from 'react'
import backg from "../asset/Rectangle148.png"
function Linktotainingtest() {
  return (
    <div className='relative'>
      <img className="absolute w-full  object-cover " src={backg}/>
      <div className='absolute text-2xl z-10 bg-slate-600 w-12 h-12'></div>
    </div>
  )
}

export default Linktotainingtest
