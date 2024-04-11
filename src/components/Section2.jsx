function Section2(props) {
  return (
    <div className={`alignCenter ${props.animation}`} style={{ overflow: "hidden" }}>
      <img style={{ width: props.onScreen ? props.scaledWidth : props.width, marginBottom: props.marginBottom, transition: "width 1s" , boxShadow: props.boxShadow}} id="photo1" src={props.image} alt="" />
    </div>
  );
}

export default Section2;
