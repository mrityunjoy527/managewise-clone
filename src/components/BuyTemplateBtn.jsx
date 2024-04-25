function BuyTemplateBtn(props) {
  return (
    <input
      style={{
        marginLeft: props.marginLeft,
        backgroundColor: props.color,
        border: props.border,
        color: props.textColor,
      }}
      className={`buy-template-btn ${props.classes} ${props.hover} ${props.classes} ${props.class}`}
      type="button"
      value={props.text}
    />
  );
}

export default BuyTemplateBtn;
