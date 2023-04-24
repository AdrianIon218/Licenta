
export default function Header(){
  return (<div className='header-container'>
  <div className='logo_box'>
    <img src="/Licenta/images/GermanMax.png" alt="GermanMax" className="logo_box__img" />
  </div>
  <header className='header header-section'>
    <div className='text-box'>
      <h1 className='heading-primary'>
        <span className='heading-primary__main'> 
          GermanMax 
        </span>
        <span className='heading-primary__sub u-margin-top--very-small'> 
          Aplicație de învățat limba Germană
        </span>
      </h1>
      <a href="#section-course-id" className='btn btn--white btn--animated'>
        Vezi cursurile
      </a>
    </div>
  </header>
  </div>);
}