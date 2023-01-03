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

  </header>
  </div>);
}