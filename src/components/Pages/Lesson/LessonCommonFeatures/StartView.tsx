interface LocProps {
  title: string;
  startClickHandler: () => void;
}

function StartView(props: LocProps) {
  return (
    <div className="flex-column--centered start-view__ctn">
      <h1 className="heading-secondary u-center-text">{props.title}</h1>
      <button className="btn btn--blue" onClick={props.startClickHandler}>
        Start
      </button>
    </div>
  );
}

export default StartView;
