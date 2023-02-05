import logo_img from "../images/GermanMax.png"

interface IProps{
  
}

export default function Header(props:IProps){
  return (<div className='header-container'>
  <div className='logo_box'>
    <img src='images/GermanMax.png' alt="GermanMax" className='logo_box__img' />
  </div>
  <header className='header'>
    <div className='text-box'>
      <h1 className='heading-primary'>
        <span className='heading-primary__main'> GermanMax </span>
        <span className='heading-primary__sub umargin-top-small'> Aplicație de învățat limba Germană</span>
      </h1>
      <a href="#section-course-id" className='btn btn--white btn--animated'>Începe un curs</a>
    </div>
  </header>
  </div>);
}