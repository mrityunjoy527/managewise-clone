function Card2(props) {
  return (
    <div className={props.animation} id="smart-task2">
      <img id="smart-task-image2" src={props.image} alt="" />
      <div className="smart-task-desc">
        <h4 className="smart-task-title">{props.title}</h4>
        <p className="smart-task-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Card2;
