import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ResetPassCode() {
    const navigate = useNavigate();
    const [emailToReset, setEmailToReset] = useState<string>('');
    useEffect(()=>{
      const email = sessionStorage.getItem('emailToReset');
      if(!email){
        navigate(-1);
      }
      else{
        setEmailToReset(email);
      }
    },[]);

    return (<section className='section-gradient section-header u_padding_down--big'>
    <div className="flex-row--centered">
      <div className="box-mountain-bg">
        <div className="box-mountain-bg__form">
          <form onSubmit={()=>{}} className="forn">
            <div className="u-margin-bottom-medium u-center-text">
              <h2 className="heading-secondary" style={{textTransform:'none'}}>Am trimis codul de resetarea la adresa {emailToReset}</h2>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    </section>);
}

export default ResetPassCode