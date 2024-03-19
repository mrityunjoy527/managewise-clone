function Tab(props) {
    return <div id="welcome">
    <h5 style={{color: props.color}}>
      <span>{props.icon}</span> {props.text}
    </h5>
  </div>;
}

export default Tab;