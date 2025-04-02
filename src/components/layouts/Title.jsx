import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col  gap-4 font-titleFont mb-14">
        <h3 className="text-sm text-designColor uppercase tracking-wide font-light">
            {title}
        </h3>
        <h1 className="text-5xl uppercase font-bold text-gray-300">
           {des}
        </h1>
      </div>
  )
}

export default Title
