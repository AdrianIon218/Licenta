interface LocProps {
  progressStatus: number;
}

function ProgressBar({ progressStatus }: LocProps) {
  return (
    <div className="progress-bar__box">
      <div
        className="progress-bar__loading"
        style={{ width: `${progressStatus}%` }}
      />
      <div className="progress-bar__grid-half" />
    </div>
  );
}

export default ProgressBar;
