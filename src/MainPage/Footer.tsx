
export default function Footer(){
  return (<div className='footer-container'>
    <div className="footer">
      <div className="footer__logo-box u-margin-bottom-medium">
        <img src="images/GermanMax-just-logo.png" alt="GermanMax" className="footer__logo" />
      </div>
      <div className="flex-row--centered-no-wrap">
        <div className="flex-element footer__navigation">
          <ul className="footer__list">
            <li className="footer__item"><a href="#" className="footer__link">Contacte</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Vlog</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Termeni și condiții</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Sugestii</a></li>
          </ul>
        </div>
        <div className="flex-element">
            <p className="footer__coryright">
              GermanMax este o aplicație destinată persoanelor dornice să-și îmbunătățească cunoștiile de limbă germană . Principalul său obiectiv fiind acela de a furniza un conținut cât mai util și facil utilizatorilor săi. Proiectul a fost creat si publicat de <span className="footer__link-up"><a href="#" className="footer__link">Ion Adrian Gabriel</a></span> . 
            </p>
        </div>
      </div>
    </div>
  </div>);
}