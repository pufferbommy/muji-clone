import React from 'react'

// icons
import { MdArrowForwardIos } from 'react-icons/md'

const More = ({ title, destination }) => {
  return (
    <a href={destination} className="flex items-center gap-2">
      <span className="text-sm text-secondary">{title}</span>
      <MdArrowForwardIos className="text-sm fill-secondary" />
    </a>
  )
}

export default More
