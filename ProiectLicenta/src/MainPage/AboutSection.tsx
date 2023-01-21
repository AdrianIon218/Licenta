import PhotoComposition from './PhotosComposition';
import aboutPhotos from './AboutPhotos.json';

function AboutSection(){
  return (<section className="section-about">
    <div className="u-center-text u-margin-bottom-medium">
      <h2 className="heading-secondary">
      Învață germană simplu și ușor
      </h2>  
    </div>

    <div className="flex-row">
      <div className="col-1-of-2-text">
        <h3 className="heading-tertiary u-margin-bottom-small">Unde se vorbește limba germană <span className="u-text-blue">?</span></h3>
        <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nobis accusantium error nisi rerum sunt quas possimus, impedit corrupti exercitationem optio fuga incidunt, beatae quos laudantium illo distinctio. Facilis, impedit?
        </p>
        
        <h3 className="heading-tertiary u-margin-bottom-small">De ce să înveți limba germană <span className="u-text-blue">?</span></h3>
        <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nobis accusantium error nisi rerum sunt quas possimus, impedit corrupti exercitationem optio fuga incidunt, beatae quos laudantium illo distinctio. Facilis, impedit?
        </p>

        <a href="#" className="btn-text">Află mai multe &rarr;</a>
      </div>

      <div className="col-1-of-2-img">
        <PhotoComposition photos={aboutPhotos.photos}/>
      </div>
    </div>
  </section>);
}

export default AboutSection;