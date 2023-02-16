import { useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const navigationList = [
  {btn:"Pagina principală", to:"", icon:'fas fa-home'},
  {btn:"Autentificare", to:"", icon:"fas fa-pen"},
  {btn:"Înregistrare", to:"", icon:"far fa-clipboard"},
  {btn:"Contacte", to:"", icon:'far fa-envelope-open'},
];

export default function MainMenu(){
  const [showMenu, setShownMenu] = useState(false);
  const triggerMenu = () => setShownMenu(oltState=>!oltState);

  const navButtons = useMemo(() => 
      navigationList.map((item,index) => 
        <li key={index} className="navigation__list__item">
        <Link to={item.to} className="navigation__link"><i className={item.icon}/> &nbsp;&nbsp;{item.btn}</Link>
        </li> ), []);

  return(<div className="navigation">
    <div className=" navigation__btn" onClick={triggerMenu}>
      <span className="navigation__btn__icon">&nbsp;</span>
    </div>
    <div className={`navigation__background ${showMenu?'navigation__menu-open':''}`} />
    <nav className="navigation__menu">
      <ul className="navigation__list">
        {navButtons}
      </ul>
    </nav>
    </div>);
}