import { useRef } from "react";
import LinkTansition from "../../Features/LinkTransition";
import axios from "axios";

export default function Login(){
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    axios.post("http://localhost:5000/login/", {
       email: email.current!.value, 
       password: password.current!.value
    }).then(response => { 
      const {status} = response.data;
      password.current!.value = '';
      switch(status){
        case 'USER_OK':
          email.current!.value = '';
          console.log('ok')
          break;
        case 'NO_USER':
          email.current!.value = '';
          console.log('no user')
          break;
        case 'PASS_INCORECT':
          console.log('incorect');
          break;
        default:
          console.log('error server')
          break;
      }
    }); 
  }

  return (<section className="section-gradient header-section u_padding_down--big">
      <div className="flex-row--centered">
        <div className="box-mountain-bg">
          <div className="box-mountain-bg__form">
            <form onSubmit={submit} className="forn">
              <div className="u-margin-bottom-medium u-center-text">
                <h2 className="heading-secondary">Autentificare</h2>
                <span className="span-header-block">
                  creeare cont nou &ensp;
                  <span className='span-pointer'>
                    <LinkTansition to="/Licenta/signup" icon="fas fa-id-card" />
                  </span>
                </span>
              </div>

              <div className="form__group">
                <input type="email" className="form__input" placeholder="Adresă de email *" id="email" name="email" ref={email} required />
                <label htmlFor="email" className="form__label form__label__required">Adresă de email</label>
              </div>

              <div className="form__group u-margin-bottom-intermediate">
                <input type="password" className="form__input" placeholder="Parolă *" id="password" name="password" ref={password} required />
                <label htmlFor="password" className="form__label form__label__required">Parolă</label>
              </div>

              <div className="form__group">
                <button className="btn btn--white">
                  Intră in cont <i className="fas fa-sign-in-alt"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>);
}