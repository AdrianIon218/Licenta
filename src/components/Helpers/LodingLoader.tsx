import React from 'react'

function LodingLoader() {
  return (
    <div className='header-section flex-row--centered-no-wrap'>
      <div className="lds-ellipsis u-margin-top-medium">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default LodingLoader