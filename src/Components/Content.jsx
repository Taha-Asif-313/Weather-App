import React from 'react'

const Content = () => {
  return (
    <div className="content w-full lg:w-[50%] h-[40%] lg:h-[60%] flex flex-col items-center justify-center">
    <img className="object-contain h-[70%] w-[60%] lg:w-[50%]" src={"/hero.png"} alt="" />
    <h1 className="lg:text-5xl h-[30%] text-2xl hidden lg:flex justify-center items-center gap-1 font-semibold text-center">
      Weather <span className="text-amber-600 font-[800]">Cheaker</span> App
    </h1>
  </div>
  )
}

export default Content