function Section2(props) {
  return (
    <div className={`${props.animation}`} style={{height: props.divHeight, borderRadius: props.borderRadius , marginTop: "60px", display: "flex", justifyContent: "center",}}>
      <img className={props.class}  style={{marginBottom: props.marginBottom, transition: "scale 1s", borderRadius: props.borderRadius, boxShadow: props.boxShadow, scale: props.onScreen? "1.06": "1",}} id="photo1" src={props.image} alt="" />
    </div>
  );
}

export default Section2;