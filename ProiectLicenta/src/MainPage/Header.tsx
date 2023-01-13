import cls from './Layout.module.css'
import logo_img from "../images/GermanMax.png"

interface IProps{
  
}

export default function Header(props:IProps){
  return (<div className={cls['header-container']}>
  <div className={cls['logo_box']}>
    <img src={logo_img} alt="GermanMax" className={cls['logo_box__img']} />
  </div>
  <header className={cls['header']}>
    <div className={cls['text-box']}>
      <h1 className={cls['heading-primary']}>
        <span className={cls['heading-primary__main']}> GermanMax </span>
        <span className={`${cls['heading-primary__sub']} ${cls['umargin-top-small']}`}> Aplicație de învățat limba Germană</span>
      </h1>
      <a href="#" className={`${cls.btn} ${cls['btn--white']} ${cls['btn--animated']}`}>Încearcă o lecție</a>
    </div>
  </header>
  </div>);
}