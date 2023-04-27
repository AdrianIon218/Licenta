
interface LocProps{
    closeBk: () => void
}

function ExitMessage(props:LocProps) {
    

  return (
    <div className="exit_message__blackdrop ">
      <div className="exit_message__box">
         hfdfdfdf
         <div className='btn_exit_ctn'>
          <div className="btn_exit" onClick={props.closeBk}> &times; </div>
         </div>
      </div>
      
    </div>
  )
}

export default ExitMessage;