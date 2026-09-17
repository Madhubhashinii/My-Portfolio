export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-name">
        Please<span>wait</span>
      </div>
      <div className="loader-sub">-- initializing portfolio...</div>
      <div className="loader-bar-track">
        <div className="loader-bar" />
      </div>
    </div>
  );
}