

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

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}