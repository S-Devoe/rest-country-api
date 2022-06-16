interface Props {
  classNameProp: string;
}

const LoadingAnimation = () => {
  return (
    <div className="loading_wrapper">
      <div className="loading_text">Loading...</div>
      <div className="loader">
        <div></div> <div></div>
      </div>
    </div>
  );
};
export default LoadingAnimation;
