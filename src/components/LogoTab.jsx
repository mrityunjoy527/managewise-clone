function LogoTab(props) {
  return (
    <div
      key={props.idx}
      className="logo"
      style={{ justifyContent: props.idx%2 === Number(props.num) ? "start" : "end" }}
    >
      <div className="logo-bg">
        <img className="logo-width" src={props.logo} alt="" />
      </div>
    </div>
  );
}

export default LogoTab;
