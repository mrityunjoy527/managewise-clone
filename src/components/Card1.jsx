function Card1(props) {
  return (
    <div className={props.animation} id="smart-task">
      <img
        id="smart-task-image"
        src={props.image}
        alt=""
      />
      <div>
        <h4 className="smart-task-title">{props.title}</h4>
        <p className="smart-task-subtitle">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}

export default Card1;
