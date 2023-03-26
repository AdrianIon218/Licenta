
export default function NoPage(){
  return (<section className="section-video-bg header-section">
    <div className="message-not-found">
      <h2 className="heading-secondary u-center-text">
        <span className="span-block">Pagina nu</span>&nbsp; 
        <span className="span-block">există !</span>
      </h2>
    </div>
    
    <video autoPlay muted loop className="bg-video" >
      <source src="videos/no_page_found-compressed.mp4" type="video/mp4" />
    </video>
  </section>);
} 