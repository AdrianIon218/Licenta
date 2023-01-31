

export default function RegisterForm(){
  
  return (
    <section className="section-sign-up">
      <div className="flex-row--centered">
        <div className="box-sign-up">
          <div className="box-sign-up__form">
            <form action="#" className="forn">
              <div className="u-margin-bottom-medium u-center-text">
                <h2 className="heading-secondary">Înregistrare curs</h2>
              </div>

              <div className="form__group">
                <input type="text" className="form__input" placeholder="Nume complet" id="name" required />
                <label htmlFor="name" className="form__label">Nume complet</label>
              </div>

              <div className="form__group">
                <input type="email" className="form__input" placeholder="Adresă de mail" id="email" required />
                <label htmlFor="name" className="form__label">Adresă de mail</label>
              </div>
              
              <div className="form__group u-margin-bottom-intermediate">
                <h3 className="form__sub-heading">Care este nivelul tău de germană ?</h3>

                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="beginner" name="level" />
                  <label htmlFor="beginner" className="form__radio-label"> 
                    <span className="form__radio-button"></span>
                    Începător
                  </label>
                </div>

                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="intermediate" name="level"/>
                  <label htmlFor="intermediate" className="form__radio-label"> 
                    <span className="form__radio-button"></span>
                    Intermediar
                  </label>
                </div>

                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="advanced" name="level"/>
                  <label htmlFor="advanced" className="form__radio-label"> 
                    <span className="form__radio-button"></span>
                    Avansat
                  </label>
                </div>
              </div>
              
              <div className="form__group">
                <button className="btn btn--white">
                  Înregistrează-te <i className="fas fa-angle-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}