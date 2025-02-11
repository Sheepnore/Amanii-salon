import loadingIcon from "../../assets/loading-svgrepo-com.svg";
function LoadingPage() {
  return (
    <div className="loadingPage">
      <img src={loadingIcon} alt="loading" className="loadingIcon" />
    </div>
  );
}

export default LoadingPage;
