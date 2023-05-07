
function LoadingLoader() {
  return (
    <div className='header-section flex-row--centered-no-wrap lazy-loading'>
      <div className="lds-ellipsis u-margin-top--medium">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default LoadingLoader