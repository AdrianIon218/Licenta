import { useState } from "react";
import RadioButton from "./RadioButton";

enum KnowlegdeLevel {
  BEGGINER, INTERMEDIATE, ADVANCED
};

export default function RegisterForm(){
  const [level, setLevel] = useState(KnowlegdeLevel.BEGGINER);

  function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    
  }

  return (
    <section className="section-sign-up">
      <div className="flex-row--centered">
        <div className="box-sign-up">
          <div className="box-sign-up__form">
            <form onSubmit={submit} className="forn">
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
                
                <RadioButton id="beginner" name="level" value={KnowlegdeLevel.BEGGINER} change={() => setLevel(KnowlegdeLevel.BEGGINER)} label="Începător" validate={()=>level === KnowlegdeLevel.BEGGINER} />

                <RadioButton id="intermediate" name="level" value={KnowlegdeLevel.INTERMEDIATE} change={() => setLevel(KnowlegdeLevel.INTERMEDIATE)} label="Intermediar" validate={()=>level === KnowlegdeLevel.INTERMEDIATE} />

                <RadioButton id="advanced" name="level" value={KnowlegdeLevel.ADVANCED}
                  change={() => setLevel(KnowlegdeLevel.ADVANCED)} label="Avansat" validate={()=>level === KnowlegdeLevel.ADVANCED} />
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