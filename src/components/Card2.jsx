function Card2(props) {
  return (
    <div id="smart-task2">
      <img id="smart-task-image2" src={props.image} alt="" />
      <div>
        <h4 className="smart-task-title2">{props.title}</h4>
        <p className="smart-task-subtitle2">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Card2;
