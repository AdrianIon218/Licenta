import axios from 'axios';
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CountDownTime from '../../Features/CountDownTime';

function ResetPassCode() {
    const navigate = useNavigate();
    const [emailToReset, setEmailToReset] = useState<string>('');
    const [expireCodeTime, setExpireCodeTime] = useState('');
    const [isCodeExpired, setCodeExpire] = useState(false);
    const codeRef= useRef<HTMLInputElement>(null);

    useLayoutEffect(()=>{
      const email = sessionStorage.getItem('emailToReset');
      if(!email){
        navigate('/Licenta/password_reset');
      }
      else{
        setEmailToReset(email);
      }
    },[]);

    useEffect(()=>{
      if(emailToReset){
        axios.post('http://localhost:5000/login/get_code_expire_time', {email:emailToReset}).then((response)=>{
        const {status} = response.data;
        if(status){
          const {expire_at} = response.data;
          setExpireCodeTime(expire_at);    
        }1
      });
      }  
    },[emailToReset]);

    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      console.log(codeRef.current!.value);
    }

    return (<section className='section-gradient section-header u_padding_down--big'>
    <div className="flex-row--centered">
      <div className="box-mountain-bg">
        <div className="box-mountain-bg__form">
          <form onSubmit={onSubmit} className="forn">
            <div className=" u-center-text">
              <h2 className="heading-secondary" style={{textTransform:'none'}}>Introduceți codul trimis la adresa {emailToReset}</h2>
            </div>
            <p className='u-margin-bottom-medium' style={{fontSize:'1rem',fontWeight:800}} >
              Codul expiră în &nbsp;<CountDownTime time={expireCodeTime} codeExpire={()=>setCodeExpire(true)}/></p>
            <div className="form__group u-margin-bottom-intermediate">
              <input type="password" className="form__input u-center-text" placeholder="Cod de resetare" id="password" name="password" minLength={6} maxLength={6} required ref={codeRef} />
            </div>
            <div className="form__group">
              <button className="btn btn--white" >
                Verifică codul
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>);
}

export default ResetPassCode;