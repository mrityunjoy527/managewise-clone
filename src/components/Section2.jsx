function Section2(props) {
  return (
    <div className="alignCenter" style={{overflow: "hidden"}}>
      <img style={{width: props.width, marginBottom: props.marginBottom, borderBottomRightRadius: props.radius, borderBottomLeftRadius: props.radius}} id="photo1" src={props.image} alt="" />
    </div>
  );
}

export default Section2;
