import cls from './Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import {IProps} from '../CommonInterfaces'

interface ILayout extends IProps {

}

export default function Layout(props:ILayout){
  return (<><div className={cls["layout-container"]}>  
    <Header />
      <main>
        {props.children}
      </main>
    </div>
    <Footer /> </>);
}