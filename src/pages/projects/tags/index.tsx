import React from 'react'

interface Props {
  label?: string,
  className?: 'string',
}

const Tags = ({label}:Props) => {
  return (
    <div className=' w-max  px-4 py-1 rounded-xl bg-purple-300 text-purple-900 font-medium capitalize text-sm'> {label ? label : 'label'} </div>
  )
}

export default Tags