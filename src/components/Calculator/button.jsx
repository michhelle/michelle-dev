const Button = ({ id, value, onClick, _color }) => {
  return (
    <button className={`${_color} calc-red `} id={id} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
