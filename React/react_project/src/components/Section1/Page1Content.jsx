import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-3 px-15 flex justify-between w-full'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
