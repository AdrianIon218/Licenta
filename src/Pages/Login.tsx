import { useRef } from "react";
import LinkTansition from "../components/Helpers/LinkTransition";

export default function Login(){
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    fetch("http://localhost:5000/login/", { method:"POST",
      body: JSON.stringify({
        name: email.current!.value,
        email: password.current!.value
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    }).then(res=>res.json()).then(data => { 
      email.current!.value = password.current!.value = '';
      console.log(data);
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
                  <LinkTansition to="/Licenta/signup" icon="fas fa-id-card" />
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