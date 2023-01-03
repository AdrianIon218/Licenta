import cls from './Layout.module.css'
import Header from './Header'
import {IProps} from '../CommonInterfaces'

interface ILayout extends IProps {

}

export default function Layout(props:ILayout){
  return (<div className=''>
  <Header />
  <main>
    {props.children}
  </main>
  </div>);
}