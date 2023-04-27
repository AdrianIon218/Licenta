import { useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { navListLogedin } from "../../data/ts-data/navLists";
import { navListNotLogedin } from '../../data/ts-data/navLists';

interface ILocProps {
  btn: string; 
  to: string; 
  icon: string;
};

const MainMenu = () => {
  const [showMenu, setShownMenu] = useState(false);
  const [menuList, setMenuList] = useState<ILocProps[]>(navListNotLogedin);
  const triggerMenu = () => {
    if(localStorage.getItem("userAccount")){
      setMenuList(navListLogedin);
    }
    setShownMenu(oltState => !oltState);
  };
 
  const linkClick= (btn:string) => {
    triggerMenu();
    if(btn==="Deconectare"){
      localStorage.removeItem('userAccount');
      setTimeout(()=>setMenuList(navListNotLogedin), 500);
    }
  }

  const navButtons = useMemo(() => 
    menuList.map((item,index) => 
        <li key={index} className="navigation__list__item">
          <Link to={item.to} className="navigation__link" onClick={e => linkClick(item.btn)}>
            <i className={item.icon}/> &nbsp;&nbsp;{item.btn}
          </Link>
        </li>), [menuList]);

  return(<div className="navigation u-disabled-user-selector">
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

export default MainMenu;