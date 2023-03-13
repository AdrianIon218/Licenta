

export default function Login(){
  function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    
  }

  return (<section className="section-login u_padding_down--big">
      <div className="flex-row--centered">
        <div className="box-mountain-bg">
          <div className="box-mountain-bg__form">
            <form onSubmit={submit} className="forn">
              <div className="u-margin-bottom-medium u-center-text">
                <h2 className="heading-secondary">Autentificare</h2>
              </div>

              <div className="form__group">
                <input type="email" className="form__input" placeholder="Adresă de mail" id="email" required />
                <label htmlFor="name" className="form__label">Adresă de mail</label>
              </div>

              <div className="form__group u-margin-bottom-intermediate">
                <input type="password" className="form__input" placeholder="Parolă" id="password" required />
                <label htmlFor="password" className="form__label">Parolă</label>
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