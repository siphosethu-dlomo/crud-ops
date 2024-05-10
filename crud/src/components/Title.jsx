import React from 'react'

function Title({ title, subtitle }) {
  return (
    <div className='text-center p-5 mb-5 bg-slate-100'>
      <h1 className='mb-2'>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

export default Title
