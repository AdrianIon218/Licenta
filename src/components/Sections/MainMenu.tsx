import { useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

interface ILocProps {
  navList: {
    btn: string; 
    to: string; 
    icon: string;
  }[]
};

export default function MainMenu(props:ILocProps){
  const [showMenu, setShownMenu] = useState(false);
  const triggerMenu = () => setShownMenu(oltState=>!oltState);

  const {navList} = props;

  const linkClick= () => {
    triggerMenu();
  }

  const navButtons = useMemo(() => 
      navList.map((item,index) => 
        <li key={index} className="navigation__list__item">
          <Link to={item.to} className="navigation__link" onClick={linkClick}>
            <i className={item.icon}/> &nbsp;&nbsp;{item.btn}
          </Link>
        </li>), []);

  return(<div className="navigation u_disabled_user_selector">
    <div className="navigation__btn" onClick={triggerMenu}>
      <span className={`navigation__btn__icon ${showMenu?'navigation__btn__icon--X':''}`}>&nbsp;</span>
    </div>
    <div className={`navigation__background ${showMenu?'navigation__menu-open':''}`} />
    <nav className="navigation__menu">
      <ul className="navigation__list">
        {navButtons}
      </ul>
    </nav>
    </div>);
}