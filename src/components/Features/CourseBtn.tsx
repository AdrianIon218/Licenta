export type IconStatus = "not started"|"in progress"|"completed";
enum Level {
  A1, A2, B1, B2, C1
}
class Icon{
  className='';
  containerClass='';
  message='';

  constructor(status:IconStatus){
    this.className = status === "not started" ? "fas fa-clock" : 
                    status === "in progress" ? "fas fa-history" : "fa fa-check";
    this.containerClass = status === "not started" ? "course-status--gray" :
            status === "in progress" ? "course-status--yellow" : "course-status--green";
    this.message = status === "not started" ? "neînceput" :
            status === "in progress" ? "neterminat" : "terminat";
  }
}

type props = {
  children:string,
  level:Level,
  status:IconStatus
};

function CourseBtn({children, level, status}:props) {
  const icon = new Icon(status);

  return (
    <div className='course-lection'>
      <button className={`course-lection-btn course-lection-btn--${Level[level]}`}>
        {children}
      </button>
      <div className={`course-status ${icon.containerClass}`} title={icon.message}>
        <i className={icon.className}></i>
      </div>
    </div>);
}

export default CourseBtn;