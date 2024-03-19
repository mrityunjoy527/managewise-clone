function BuyTemplateBtn(props) {
  return (
    <input
      style={{
        marginLeft: props.marginLeft,
        backgroundColor: props.color,
        border: props.border,
        color: props.textColor,
      }}
      className={`buy-template-btn ${props.hover}`}
      type="button"
      value={props.text}
    />
  );
}

export default BuyTemplateBtn;
