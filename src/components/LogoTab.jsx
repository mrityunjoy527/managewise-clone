import Logo from "./Logo"

function LogoTab(props) {
  return (
    <div
      key={props.idx}
      className="logo"
      style={{
        justifyContent: props.idx % 2 === Number(props.num) ? "start" : "end",
      }}>
      <Logo icon={props.logo}/>
    </div>
  );
}

export default LogoTab;
