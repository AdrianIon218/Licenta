function LoadingPanel() {
  return (
    <div className="loading_panel flex-column--centered">
      <h3>Așteptați</h3>
      <div className="lds-ellipsis u-margin-top--medium">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default LoadingPanel;
