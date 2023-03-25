
function Contacts() {
  function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    
  }

  return (
    <section className="header-section form u_padding_down--big flex-column--centered">
      <form onSubmit={submit} className="forn box-form u-margin-top-small">
        <div className="u-margin-bottom-medium u-center-text">
          <h2 className="heading-secondary">
            Formular de contact 
          </h2>
        </div>

        <div className="form__group">
          <input type="email" className="form__input" placeholder="Adresă ta de email *" id="email" required />
          <label htmlFor="email" className="form__label form__label__request">Adresă ta de email</label>
        </div>
        <div className="form__group">
          <textarea name="message" className="form__input form__textarea" id="message" rows={10} 
          placeholder="Mesaj *" required />
          <label htmlFor="message" className="form__label form__label__request">Mesaj</label>
        </div>

        <div className="form__group">
          <button className="btn btn--white">
            Trimite mesajul
          </button>
        </div>
      </form>

    </section>
  )
}

export default Contacts