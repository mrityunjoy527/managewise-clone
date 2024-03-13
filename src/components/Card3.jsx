function Card3(props) {
  return (
    <div className="card3">
      {props.bell}
      <h4>{props.title}</h4>
      <p>{props.para}</p>
    </div>
  );
}

export default Card3;
