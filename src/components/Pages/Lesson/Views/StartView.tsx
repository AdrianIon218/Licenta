interface LocProps{
  title:string
}

function StartView({title}:LocProps) {
  
  return (
    <div className="flex-column--centered start-view__ctn">
        <h1 className="heading-secondary">{title}</h1>
        <button className="btn btn--blue">Începe lecția</button>
    </div>
  )
}

export default StartView;